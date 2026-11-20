import express from 'express';
import path from 'path';

const PORT = 3000;
const app = express();

// Middlewares
app.use(express.json()); // Permite recibir datos en formato JSON
app.use(express.static(path.resolve('public'))); // Sirve los archivos estáticos (HTML, CSS, JS)
app.use(express.urlencoded({ extended: true })); // Permite leer datos de formularios HTML en req.body

// --- RUTAS ---

// Ruta para Iniciar Sesión
app.post('/login', (req, res) => {
    const email = req.body.email;
    const contrasena = req.body.contrasena; 

    res.send(`
        <h2>Datos de Inicio de Sesión recibidos</h2>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Contraseña:</strong> ${contrasena}</p>
        <a href="/">Volver al formulario</a>
    `);
});

//  Ruta para Recuperar Contraseña
app.post('/recuperar', (req, res) => {
    const correoRecuperar = req.body.correo_recuperar; 

    res.send(`
        <h2>Solicitud de Recuperación recibida</h2>
        <p>Se enviará un enlace de recuperación a: <strong>${correoRecuperar}</strong></p>
        <a href="/">Volver al formulario</a>
    `);
});

// Ruta para Crear Cuenta (Registro)
app.post('/registro', (req, res) => {
    const nuevoUsuario = req.body.nuevo_usuario;
    const nuevaContrasena = req.body.nueva_contrasena; 

    res.send(`
        <h2>Registro recibido</h2>
        <p><strong>Nuevo correo:</strong> ${nuevoUsuario}</p>
        <p><strong>Contraseña creada:</strong> ${nuevaContrasena}</p>
        <a href="/">Volver al formulario</a>
    `);
});

// Levantar el servidor 
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
