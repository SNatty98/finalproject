const router = require("express").Router();
const AdminUser = require("../models/AdminUser");
const bcrypyt = require("bcrypt");

//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypyt.genSalt(10);
      req.body.password = await bcrypyt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await AdminUser.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can only update your account");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.adminuserId === req.params.id) {
    try {
      await AdminUser.findByIdAndDelete(req.params.id);
      res.status(200).json("User Deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can only delete your account");
  }
});

module.exports = router;
