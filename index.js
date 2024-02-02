const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("Dragon is running")
});

app.listen(port, () => {
    console.log(`Dragon API running on port: ${port}`)
})