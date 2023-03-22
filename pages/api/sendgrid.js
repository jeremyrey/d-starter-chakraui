import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    let attachment = []
    if (req.body.fileBase64) {
      attachment = [
        {
          content: req.body.fileBase64,
          filename: req.body.filename,
          type: req.body.extension,
          disposition: 'attachment',
        },
      ]
    }
    await sendgrid.send({
      to: req.body.email, // Your email where you'll receive emails
      from: 'go@d-starter.fr', // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>${req.body.message}</div>`,
      attachments: attachment,
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
