const router = require("express").Router();
const Contact = require("../models/Contact.js");

//CREATE MESSAGE
router.post("/", async (req, res) => {
  const newContact = new Contact(req.body);
  try {
    const savedContact = await newContact.save();
    res.status(200).json(savedContact);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE MESSAGE
router.delete("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
     {
      try {
        await contact.delete();
        res.status(200).json("User message deleted!");
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
    const contact = await Contact.findById(req.params.id);
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL MESSAGES
router.get("/", async (req, res) => {
    const username = req.query.user;
    try {
      let contacts;
      if (username) {
        contacts = await Contact.find({ username });
      } 
       else {
        contacts = await Contact.find();
      }
      res.status(200).json(contacts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
