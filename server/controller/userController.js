const fs = require('fs').promises;
const path = require('path');


const userFilePath = path.join(__dirname, '../../src/components/usuariosRegistrados.json');

const controller = {
    register: async function (req, res) {
        try {
            // Leer el archivo JSON una sola vez
            const usersData = await fs.readFile(userFilePath, 'utf-8');
            const users = JSON.parse(usersData);

            // Verificar si el correo electrónico ya está registrado
            const emailExists = users.some(user => user.email === req.body.email);
            if (emailExists) {
                return res.status(400).send('El correo electrónico ya está registrado');
            }

            const ultimo = users.length;
            const usuarioNuevo = {
                id: ultimo + 1,   
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                celular: req.body.celular,
                password: req.body.password,
                rol: "usuario",
                fecha_creación: new Date()
            };

            users.push(usuarioNuevo);

            // Escribir el archivo JSON
            await fs.writeFile(userFilePath, JSON.stringify(users, null, 4));

            res.status(200).send('Usuario creado con éxito');
        } catch (error) {
            console.error('Error al procesar el registro:', error);
            res.status(500).send('Error interno del servidor');
        }
    },

    login: async function (req, res) {
        try {
            const usersData = await fs.readFile(userFilePath, 'utf-8');
            const users = JSON.parse(usersData);

            for (x of users) {
                if (x.email === req.body.email && x.password === req.body.password) {
                    res.status(200).send("Ok")
                    return
                }
            }
            res.status(401).send('Credenciales incorrectas')
        }
        

        catch (error) {
            console.error('Error al procesar el registro:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
};

module.exports = controller;
