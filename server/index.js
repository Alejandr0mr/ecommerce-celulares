const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    try {
        // Enviar una respuesta inicial

        let config = {
            method: "GET",
            maxBodyLength: Infinity,
            url: 'https://api.jsonbin.io/v3/b/664e413dacd3cb34a84c01ea',
            headers: {
                'Content-Type': 'application/json',
                "X-Master-Key": "$2a$10$G4Gi.QvGosjzduabWZjmXugLWUU0yL9vTiVSExFzwfLbyHy66RRr6"
            }
        };


          axios(config)
  .then(result => {
    res.send(result.data.record)
  })
  // res.send("Saludando desde el BackEnd");
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
});

const userController = require("./controller/userController");

// app.post('/registro-usuario', userController.register);
// app.use('/login', userController.login);
app.post('/orden', userController.orden);  // Enviamos por el app.post los datos de la orden al controlador.

// Visualización del puerto.
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto ", PORT);
});
