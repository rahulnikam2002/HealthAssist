const bcrypt = require("bcrypt");
const userModel = require("../../models/user/user.model");
const userOTPModel = require("../../models/OTP/otp.model");
const jwt = require("jsonwebtoken");
const nodeMailer = require("nodemailer");

exports.register = async (req, res) => {
  const user = await userModel.findOne({
    userEmail: req.body.userEmail,
  });

  if (!user) {
    const newUser = new userModel({
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      userPassword: await bcrypt.hash(req.body.userPassword, 10),
    });

    const saveUser = await newUser.save();

    if (saveUser) {
      const userToken = jwt.sign(
        { userEmail: req.body.userEmail },
        process.env.JWT_SEC,
        { expiresIn: "1d" }
      );
      res.status(200).send({
        isUserAdded: true,
        userToken,
        message: "User registered successfully!",
      });
    } else {
      res.status(502).send({
        isUserAdded: false,
        message: "Something went wrong while addind data to database",
      });
    }
  } else {
    res.status(406).send({
      isExistingUser: true,
      message: "You already have an account, Try Sign In!",
    });
  }
};

exports.login = async (req, res) => {
  const user = await userModel.findOne({
    userEmail: req.body.userEmail,
  });

  if (user) {
    const isPasswordMatching = await bcrypt.compare(
      req.body.userPassword,
      user.userPassword
    );

    if (isPasswordMatching) {
      const userToken = jwt.sign(
        { userEmail: req.body.userEmail },
        process.env.JWT_SEC,
        { expiresIn: "1d" }
      );
      res.status(200).send({
        isUserLogin: true,
        userToken,
        message: "User logged in successfully!",
      });
    } else {
      res.status(502).send({
        isUserAdded: false,
        message: "Something went wrong while addind data to database",
      });
    }
  } else {
    res.status(406).send({
      isExistingUser: false,
      message: "You dont have an account, Try Sign Up!",
    });
  }
};

const doUserExist = async (email) => {
  const user = await userModel.findOne({
    userEmail: email,
  });
  if (user) {
    return true;
  } else {
    return false;
  }
};

exports.sendOTPMail = async (req, res) => {
  const email = req.body.userEmail;
  let OTPModel;

  if (await doUserExist(req.body.userEmail)) {
    res.status(406).send({
      message: "User already exist",
    });
  } else {
    const OTP = Math.floor(1000 + Math.random() * 9000);
    const stringOTP = String(OTP);

    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: "codewithrahulnikam@gmail.com",
        pass: process.env.APP_PASSWORD,
      },
    });

    const emailTemplate = {
      from: `"HealthAssist" <codewithrahulnikam@gmail.com>`,
      to: `${email}`,
      subject: `4 Digit verification code from HealthAssist`,
      text: "",
      html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:90%;padding:20px 0">
        <div style="border-bottom:1px solid #eee">
          <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">HealthAssist</a>
        </div>
        <p style="font-size:1.1em">Hi,</p>
        <p>Below is your 4 digit verification code for verifing your identity, Make sure you do not share this OTP with anyone.</p>
        <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
        <p style="font-size:0.9em;">Regards,<br />HealthAssist</p>
        <hr style="border:none;border-top:1px solid #eee" />
        <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
          <p>HealthAssist</p>
          <p>Pune, Maharashtra</p>
          <p>India</p>
        </div>
      </div>
    </div>`,
    };

    const sendMail = transporter.sendMail(
      emailTemplate,
      async (err, emailSend) => {
        if (err) {
          res.status(500).send({
            messgae: "Some error occurred while sending the mail",
          });
        } else {
          OTPModel = await new userOTPModel({
            userEmail: email,
            userOTP: await bcrypt.hash(stringOTP, 10),
          });
          const saveUserOtp = await OTPModel.save();
          res.send(saveUserOtp);
        }
      }
    );
  }
};


exports.verifyOTP = async (req, res) => {
  const { userEmail, userOTP } = req.body;
  const OTPModel = await userOTPModel.findOne({
    userEmail: userEmail,
  });
  const isOTPValid = await bcrypt.compare(userOTP, OTPModel.userOTP);
  if (isOTPValid) {
    res.status(200).send({
      isOTPValid,
      messgae: "Valid OTP"
    });
    
    const deleteOTPEntry = await userOTPModel.deleteOne({
      userEmail: userEmail
    });

  } else {
    res.status(406).send({
      isOTPValid,
      messgae: "InValid OTP"

    });
  }
};
