const express = require('express');
const {body, validationResult} = requiere('express-validator');
const app = express();

app.use(express.json());

// Endpoint para sign-in con validaciones
app.post('/auth/sign-in', [
    body('email').isEmail().withMessage('Debe ser un correo válido'),
    body('password').notEmpty().withMessage('La contraseña es requerida'),
    ], (req, res) => {

    // Verifica si hay errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Si todo está bien, procesa la solicitud
    const { email, password } = req.body;
    res.json({
        message: 'success sign in',
        email,
        password
    });
    });

    // Inicia el servidor
    const port = 3000;
    app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});



//Link
https://express-validator.github.io/docs/guides/getting-started