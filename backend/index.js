const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const serviceAccountJson = JSON.parse(process.env.FIREBASE_ADMIN_CRENDENTIALS)
initializeApp({
  credential: cert(serviceAccountJson),
});

const db = getFirestore();

app.post("/new_post", async (req, res) => {
  const { title, description, category } = req.body;
  if (!title || !description || !category) {
    return res.status(400).json({ message: "Title, description, and category are required." });
  }
  try {
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    const newPost = {
      title,
      description,
      category,
      createdAt: formattedDate,
    };
    const docRef = await db.collection("posts").add(newPost);
    res.status(201).json({ id: docRef.id, ...newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/fetch_posts", async (req, res) => {
  try{
    const snapshot = await db.collection("posts").get();
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(posts)
  }catch(error){
    console.error(error)
    res.status(400).json({message: 'No Post Available'})
  }
});

app.delete("/fetch_posts/:id", async (req, res) => {
  const { id } = req.params;
  try{
    await db.collection("posts").doc(id).delete();
    res.status(200).json({message: 'Post Deleted Successfully'});
  }catch(error){
    res.status(500).json({message: 'failed to delete post'});
  }
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post("/send_mail", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }
  const mailOptions = {
    from: email,
    to: "abiolaquadri111@gmail.com",
    subject: name,
    text: message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to send email." });
    }
    console.log("Email sent: " + info.response);
    res.status(200).json({ message: "Email sent successfully." });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
