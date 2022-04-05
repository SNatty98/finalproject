const router = require("express").Router();
const Task = require("../models/Task");

//CREATE TASK
router.post("/", async (req, res) => {
  const newTask = new Task(req.body);
  try {
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE TASK
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task.username === req.body.username) {
      try {
        const updatedTask = await Task.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedTask);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(101).json("You can only update your tasks");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE TASK
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task.username === req.body.username) {
      try {
        await task.delete();
        res.status(200).json("Task has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(101).json("You can only delete your tasks");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET TASK
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
