const express = require('express')

const app = express();
const connectDB = require('./Lib/db');
const port = 5000;
connectDB();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})