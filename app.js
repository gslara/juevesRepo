const express = require('express') //node supone que express es un módulo nativo
const app = express() //ejecuta la función express, app guarda todas las funciones de express
const port = 3000

const path = require('path');

app.use(express.static('public')); //definimos la ruta estática

app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './views/index.html'));
    }) //app.get(ruta de acceso, función callback)

//console.log(__dirname);

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
})

app.listen(port, () => console.log('Probando el watcher! ' + port))