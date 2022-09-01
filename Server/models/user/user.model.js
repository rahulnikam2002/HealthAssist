const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
      unique: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    userImage: {
      type: String,
    },
    userCity: {
      type: String,
    },
    userState: {
      type: String,
    },
    userCity: {
      type: String,
    },
    userAge: {
      type: Number,
    },
    totalAppointments: {
      type: Number,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserModel", userModel);