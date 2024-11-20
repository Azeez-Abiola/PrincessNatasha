import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

app.post('/send_mail', (req, res) => {
  const {name, email, message} = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  
  const mailOptions = {
  from: email,
  to: 'tuoyosamuel9082@gmail.com',
  subject: name,
  text: message 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    res.status(402).send('Invalid Email')
  } else {
    console.log('Email sent: ' + info.response);
    res.status(200).json({message: 'Email Sent Successfully'})
  }
});
})

app.listen(process.env.PORT, () => console.log('Server is Running'));
