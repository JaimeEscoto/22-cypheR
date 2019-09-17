require('./config/config');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'hbs');


const cypheR = require('./logyc/cypheR');

app.get('/', (req, res) => {

    res.render('index');

});
app.get('/encrypt/:data', (req, res) => {

    let result = cypheR.encrypt(req.params.data);

    res.json({ result });

    //res.render('home', {
    //   encryptedData: encryptedData
    //});

});

app.get('/decrypt/:data', (req, res) => {

    let result = cypheR.decrypt(req.params.data);
    let body = req.body;
    res.json({ result, body });

});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en puerto ${process.env.PORT} `);

});