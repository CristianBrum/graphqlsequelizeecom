'use strict';

require('dotenv').config();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

const sendConfirmationEmail = async (user, items, quanty, order) => {
  await transporter
    .sendMail({
      from: '"Fred Foo 👻" <lojax@no-reply.com>',
      to: `${user.storeCustomerName} ${user.storeCustomerEmail}`,
      subject: `Olá ✔ ${user.storeCustomerName} Seu Pedido n: ${order.id}`,
      text: 'Hello world?',
      html: `<p><br>${items}: ${quanty}</p><br>`,
    })
    .then(() => {
      console.log(
        `Email Enviado! para ${user.storeCustomerName} no Email:${user.storeCustomerEmail}`,
      );
    })
    .catch(() => {
      console.log('email fail');
    });
};

module.exports = {
  sendConfirmationEmail,
};
