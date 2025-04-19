// Este archivo contiene el código JavaScript para la funcionalidad de la página web, manejando interacciones y dinámicas del sitio. 

import { algo } from './archivo.js';

document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes agregar código para manejar interacciones en la página
    console.log('La página ha sido cargada y está lista para interactuar.');

    // Ejemplo de un evento de clic en un botón
    const contactButton = document.getElementById('contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
        });
    }
});

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Configura el transporte de correo
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tu-correo@gmail.com',
            pass: 'tu-contraseña'
        }
    });

    const mailOptions = {
        from: email,
        to: 'tu-correo@gmail.com',
        subject: `Nuevo mensaje de ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error al enviar el mensaje');
        }
        res.send('Mensaje enviado correctamente');
    });
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));