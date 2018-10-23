const nodemailer = require('nodemailer');
const creds = require('./creds');
const router = require('express').Router();
const Contact = require('../../models/Contact');


const transport = {
host: 'email-smtp.us-east-1.amazonaws.com',
port: 465,
secure: true,
auth: {
    user: 'AKIAJ7PFQ5KKJPJLGQKA',
    pass: 'AgMeF4IK1mfC3DfcxAlznTt7pHmywfsXRnDVm8QO1OOB'
  }
};

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});



  router.post('/api/send', (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    var content = `name: ${name} \n email: ${email} \n message: ${message} `

    var mail = {
      from: 'david@eleganthf.net',
      to: 'vegreenfusion02@gmail.com',
      subject: `Vegreen Message: ${name}`,
      text: `Name: ${name}\n E-Mail: ${email}\n Message: ${message}`
    }
    Contact.create(req.body)
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  });

module.exports = router;
