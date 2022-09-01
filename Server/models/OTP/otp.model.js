const mongoose = require("mongoose");

const userOTPModel = new mongoose.Schema(
  {
    userEmail: {
      type: String
    },
    userOTP: {
        type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("userOTPModel", userOTPModel);