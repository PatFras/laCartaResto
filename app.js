const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/entradas', (req, res) => res.sendFile(path.join(__dirname, 'views', 'entradas.html')));
app.get('/platosPrincipales', (req, res) => res.sendFile(path.join(__dirname, 'views', 'platosPrincipales.html')));
app.get('/ensaladas', (req, res) => res.sendFile(path.join(__dirname, 'views', 'ensaladas.html')));
app.get('/raws', (req, res) => res.sendFile(path.join(__dirname, 'views', 'raws.html')));
app.get('/postres', (req, res) => res.sendFile(path.join(__dirname, 'views', 'postres.html')));
app.get('/desayunoYMeriendas', (req, res) => res.sendFile(path.join(__dirname, 'views', 'desayunoYMeriendas.html')));
app.get('/bebidas', (req, res) => res.sendFile(path.join(__dirname, 'views', 'bebidas.html')));
app.get('/smoothies', (req, res) => res.sendFile(path.join(__dirname, 'views', 'smoothies.html')));
app.get('/teYCafe', (req, res) => res.sendFile(path.join(__dirname, 'views', 'teYCafe.html')));
app.get('/vinos', (req, res) => res.sendFile(path.join(__dirname, 'views', 'vinos.html')));
app.get('/cervezas', (req, res) => res.sendFile(path.join(__dirname, 'views', 'cervezas.html')));

app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:' + PORT));