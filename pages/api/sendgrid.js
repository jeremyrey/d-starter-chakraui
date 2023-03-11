import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: 'mannuarora7000@gmail.com', // Your email where you'll receive emails
      from: 'manuarorawork@gmail.com', // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>${req.body.message}</div>`,
    })
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
/*async function sendEmail(req, res) {
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
    subject: req.body.subject,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })
  res.status(200)
}

export default sendEmail*/
