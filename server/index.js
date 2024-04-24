const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send(userJSON);
});

const userController = require("./controller/userController"); // Renombra 'user' a 'userController'
app.post('/registro-usuario', userController.register); // Usa 'app.post' para el registro de usuario
app.use('/login', userController.login) // Usa 'app.post' para el inicio de sesión

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto ", PORT);
});