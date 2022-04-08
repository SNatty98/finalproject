const router = require("express").Router();
const Message = require("../models/Message.js");

//CREATE MESSAGE
router.post("/", async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE MESSAGE
router.delete("/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
     {
      try {
        await message.delete();
        res.status(200).json("Message deleted!");
      } catch (err) {
        res.status(500).json(err);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET MESSAGE
router.get("/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    res.status(200).json(message);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL MESSAGES
router.get("/", async (req, res) => {
    const username = req.query.user;
    try {
      let messages;
      if (username) {
        messages = await Message.find({ username });
      } 
       else {
        messages = await Message.find();
      }
      res.status(200).json(messages);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
