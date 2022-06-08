require('dotenv').config()

export default async function (req,res) {
    if(req.method === 'POST') {
        try{
            let nodemailer = require('nodemailer')
            const transporter = nodemailer.createTransport({
                port: 587,
                host: 'smtp.office365.com',
                auth: {
                    user: process.env.login,
                    pass: process.env.password,
                },
                secure: false
            })

            const mailData = {
                from: process.env.login,
                to: process.env.emailto,
                subject: `Message From ${req.body.name}`,
                text: req.body.message + " | Sent from: " + req.body.email,
                html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
            }

            transporter.sendMail(mailData, function (err, info) {
                if(err)
                    console.log(err)
                else
                    console.log(info)
            })
            res.status(200).end()
        } catch(err) {
            res.status(err).json({})
        }
    } else {
        res.status(405)
        res.end()
    }
}