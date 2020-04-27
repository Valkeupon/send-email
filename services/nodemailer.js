const nodemailer = require('nodemailer');

const nodeMailerInstance = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SENDEMAIL,
    pass: process.env.SENDMDP
  }
});

function sendEmail(params) {
  nodeMailerInstance.sendMail(params, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendEmail;