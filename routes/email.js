import express from 'express'
import nodemailer from 'nodemailer'
import 'dotenv/config'

const router = express.Router()

router.get('/send', async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS
    }
  })

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: 'bcumbie@una.edu',
    subject: 'CIS 486 MEGA POP QUIZ POINTZZZZ 🎯',
    text: 'Hi Barry, this is Paridhi testing the nodemailer route!'
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err)
      res.status(500).send('❌ Email failed to send')
    } else {
      console.log('✅ Email sent:', info.response)
      res.send('📬 Email sent successfully!')
    }
  })
})

export default router
