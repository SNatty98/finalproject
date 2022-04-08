const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    taskInfo: {
      type: String,
    },

    grouping: {
      type: Array,
      required: false,
    },

    taskImage: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
