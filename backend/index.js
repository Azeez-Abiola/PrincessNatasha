const express = require("express");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const axios = require("axios");
const FormData = require("form-data")
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const serviceAccountJson = JSON.parse(process.env.FIREBASE_ADMIN_CRENDENTIALS);

initializeApp({
  credential: cert(serviceAccountJson),
});

const db = getFirestore();

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png|webp||gif/;
    const extname = allowedFileTypes.test(file.originalname.toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb("Error: Only images are allowed!");
    }
  },
});

app.post("/new_post", upload.single("thumbnail"), async (req, res) => {
  const { title, description, category } = req.body;

  if (!title || !description || !category || !req.file) {
    return res.status(400).json({ message: "All fields, including thumbnail, are required." });
  }

  try {
    const formData = new FormData();
    formData.append("image", req.file.buffer.toString("base64"));
    formData.append("key", process.env.IMGBB_API_KEY);

    const imgbbResponse = await axios.post("https://api.imgbb.com/1/upload", formData, {
      headers: formData.getHeaders(),
    });

    const { url, delete_url } = imgbbResponse.data.data;

    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const newPost = {
      title,
      description,
      category,
      thumbnail: url,
      deleteUrl: delete_url,
      createdAt: currentDate,
    };

    const docRef = await db.collection("posts").add(newPost);
    res.status(201).json({ id: docRef.id, ...newPost });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/fetch_posts", async (req, res) => {
  try {
    const snapshot = await db.collection("posts").get();
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ message: "No Post Available" });
  }
});

app.get("/fetch_posts/:id", async (req, res) => {
  const { id } =  req.params;
  try{
    const docRef = await db.collection("posts").doc(id).get();
    if(!docRef.exists){
      res.status(404).json({message: 'Post Not Found'});
    }
    const post = {...docRef.data()}
    res.status(200).json(post);
  }catch(error){
    console.error(error);
    res.status(500).json({message: 'internal server error'});
  }
});

app.put("/update_posts/:id", async (req, res) => {
  const { id } = req.params;
  const updatedPost = req.body;
  try{
    const docRef = db.collection("posts").doc(id);
    const doc = await docRef.get();
    if(!docRef.exists){
      res.status(404).json({message: 'Post Not Found'});
    }
    await docRef.update(updatedPost);
    res.status(200).json({message: 'Post Update Successfully'})
  }catch(error){
    console.error(error);
    res.status(500).json({message: 'internal server error'});
  }
});

app.get("/search_posts", async (req, res) => {
  const { query } = req.query;
  try {
    const snapshot = await db
      .collection("posts")
      .where("title", ">=", query)
      .where("title", "<=", query + "\uf8ff")
      .get();

    const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    if (posts.length === 0) {
      return res.status(404).json({ message: "No Posts Found" });
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.delete("/delete_posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const docRef = db.collection("posts").doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ message: "Post not found" });
    }

    const { deleteUrl } = doc.data();

    if (deleteUrl) {
      await axios.delete(deleteUrl);
    }

    await docRef.delete();

    res.status(200).json({ message: "Post and image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete post and image" });
  }
});

const transporter = require("nodemailer").createTransport({
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
    to: "princessbalogun8@gmail.com",
    subject: name,
    text: message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Failed to send email." });
    }
    res.status(200).json({ message: "Email sent successfully." });
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
