const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('Database connected'));

app.get('/', (req, res) => {
    res.send('Running')
})

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)

let port = 4000;
app.listen(port, () => {
    console.log('running on port', port);
})