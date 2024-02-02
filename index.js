const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')
app.use(cors())

const categories = require('./date/categories.json')

app.get('/', (req, res) => {
    res.send("Dragon is running")
});

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Dragon API running on port: ${port}`)
})