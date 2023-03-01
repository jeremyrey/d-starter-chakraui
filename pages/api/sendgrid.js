async function sendEmail(req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'jeremyrey@aplusc.fr',
      pass: '13aout1989',
    },
    secure: true,
  })
  const mailData = {
    from: 'jeremyrey@aplusc.fr',
    to: 'famillelosreyes@gmail.com',
    subject: `Message From ${req.body.subject}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })
  res.status(200)
}

export default sendEmail
