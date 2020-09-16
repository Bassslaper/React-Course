/* eslint-disable no-unused-vars */
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const  htmlToText = require('nodemailer-html-to-text').htmlToText;
const {email, password} = require('./config');
const smtpTransport = require('nodemailer-smtp-transport');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'anabrosimov85@gmail.com',
    pass: '85Sash87Jeni15Mih2020'
  },
  authMethod: 'PLAIN'
});

transporter.use('compile', htmlToText());
const sendOrderEmail = data => {
  const options = {
    from: `MrDonald's <${email}> `,
    to: data.email,
    subject: `Ваш заказ из MrDonald's`,
    html: `
      <div>
        <h2>Здравствуйте, ${data.nameClient.split(' ')[0]}!</h2>
        <h3>Ваш заказ: </h3>
        <ul>
          ${data.order.map(({ itemName, count, price }) => (
              `<li>${itemName} - ${count}шт., цена ${price * count} руб.</li>`
          ))}
        </ul>
        <p>Итого: ${data.order.reduce((sum, item) => sum + (item.price * item.count), 0)} руб.</p>
        <small>Ожидайте курьера!</small>

      </div>  
    `
  };

  transporter.sendMail(options);
}

exports.sendUserEmail = functions.database.ref('orders/{pushID}')
    .onCreate(order => sendOrderEmail(order.val()));

