const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {

    username:{
        type: String,
        required: true
    },
    
    title: {
      type: String,
      required: true,
    },

    info: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
