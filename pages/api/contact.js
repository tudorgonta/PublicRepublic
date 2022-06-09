require('dotenv').config()
const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.API_KEY);
export default async function (req,res) {

    const body = JSON.parse(req.body);
    console.log('body', body);

    const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;
    
    mail.send({
        to: 'fedearasina@gmail.com',
        from: 'contact.do.not.reply@publicrepublic.art',
        subject: 'New Message!'+body.name,
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
      }).then(() => {
        res.status(200).json({ status: 'Ok' });
      });
}