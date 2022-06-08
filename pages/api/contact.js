require('dotenv').config()

export default async function (req,res) {
    const { name, email, message} = JSON.parse(req.body);
    
            let nodemailer = require('nodemailer')
            const transporter = nodemailer.createTransport({
                port: 587,
                host: 'smtp.office365.com',
                auth: {
                    user: process.env.login,
                    pass: process.env.password,
                },
                secure: true
            })

            await new Promise((resolve, reject) => {
                // verify connection configuration
                transporter.verify(function (error, success) {
                    if (error) {
                        console.log(error);
                        reject(error);
                    } else {
                        console.log("Server is ready to take our messages");
                        resolve(success);
                    }
                });
            });

            const mailData = {
                from: process.env.login,
                to: process.env.emailto,
                subject: `Message From ${name}`,
                text: message + " | Sent from: " + email,
                html: `<div>${message}</div><p>Sent from: ${email}</p>`
            }

            await new Promise((resolve, reject) => {
                // send mail
                transporter.sendMail(mailData, (err, info) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        console.log(info);
                        resolve(info);
                    }
                });
            });

            res.status(200).json({ status: "OK" });
}