const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    profilePic: {
      type: String,
      default: "",
    },

    admin: {
      type: Boolean,
      default: false,
      required: false,
    },

    taskAlg: {
      type: Boolean,
      default: false,
    },

    taskTrig: {
      type: Boolean,
      default: false,
    },

    taskWN: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
