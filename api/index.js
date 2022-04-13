const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const taskRoute = require("./routes/tasks");
const messageRoute = require("./routes/messages");
const contactRoute = require("./routes/contacts");
// const multer = require("multer");
// const path = require("path");

dotenv.config();
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept,content-type,application"
  );
  next();
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/tasks", taskRoute);
app.use("/api/messages", messageRoute);
app.use("/api/contacts", contactRoute);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, '/images/')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname)
//   },
// })

// const upload = multer({ storage: storage })

// app.post('/image', upload.single('file'), function (req, res) {
//   res.json({})
// })

app.listen("5000", () => {
  console.log("Backend is running");
});
