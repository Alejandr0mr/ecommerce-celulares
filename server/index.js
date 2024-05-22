const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Saludando por el back");
});

const userController = require("./controller/userController");
// app.post('/registro-usuario', userController.register);
// app.use('/login', userController.login)
app.post('/orden', userController.orden)  //Enviamos por el app.post los datos de la orden al controlador.


//Visualización del puerto.
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto ", PORT);
});