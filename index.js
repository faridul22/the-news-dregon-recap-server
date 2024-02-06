// const express = require('express');
// const app = express();
// const port = 5000;

// const cors = require('cors')
// app.use(cors())


// const categories = require('./date/categories.json')


// app.get('/', (req, res) => {
//     res.send("Dragon is running")
// });



// app.get('/categories', (req, res) => {
//     res.send(categories)
// })



// app.listen(port, () => {
//     console.log(`Dragon API running on port: ${port}`)
// })
//-------------------------End------------------------------






// const express = require("express");
// const app = express();
// const port = 5000;

// const cors = require("cors");
// app.use(cors())


// const categories = require('./date/categories.json');


// app.get("/", (req, res) => {
//     res.send("Dragon news is Running Now!!!")
// })


// app.get('/categories', (req, res) => {
//     res.send(categories)
// })


// app.listen(port, () => {
//     console.log(`Dragon news is running on port2: ${port}`)
// })
//----------------------------End----------------------------


// const express = require("express");
// const app = express();
// const port = 5000;

// const cors = require("cors");
// app.use(cors());


// const categories = require("./data/categories.json")


// app.get("/", (req, res) => {
//     res.send("Dragon News 3 is Running");
// });


// app.get("/categories", (req, res) => {
//     res.send(categories)
// })


// app.listen(port, () => {
//     console.log(`Dragon News 3 is Running on Port:${port}`)
// });
//-----------------------------End-------------------------------


// const express = require("express");
// const app = express();
// const port = 5000;

// const cors = require("cors");
// app.use(cors());


// const categories = require("./data/categories.json");


// app.get("/", (req, res) => {
//     res.send("Dragon News 4 is Running");
// });


// app.get("/categories", (req, res) => {
//     res.send(categories)
// });


// app.listen(port, () => {
//     console.log(`Dragon News 4 is running on Port:${port}`)
// });
//------------------End---------------------------

const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");
app.use(cors());


const categories = require("./data/categories.json");
const news = require("./data/news.json");


app.get("/", (req, res) => {
    res.send("Dragon News 5 is Running");
});


app.get("/categories", (req, res) => {
    res.send(categories)
});

app.get("/news", (req, res) => {
    res.send(news)
});

app.get("/news/:id", (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews);
})


app.listen(port, () => {
    console.log(`Dragon News 5 is running on Port:${port}`)
});