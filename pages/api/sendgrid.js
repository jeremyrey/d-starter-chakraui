async function sendEmail(req, res) {
  /*try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "jeremyrey@aplusc.fr", // Your email where you'll receive emails
      from: "manuarorawork@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>You've got a mail</div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }*/

  return res.status(200).json({ error: '' })
}

export default sendEmail
