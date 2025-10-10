const express = require('express')
const app = express()
const path = require('path')

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) { //middleware
    res.locals.errors = []
    next()
})

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(3000)