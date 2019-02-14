const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')
const session = require('express-session')

let settings = fs.readFileSync("settings.json");
settings = JSON.parse(settings);

app.set('view engine', 'ejs')
app.use('/assets', express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: 'fdsg74894saf89g74894hd',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

// Middlewares
app.use(require('./middlewares/flash'))

// Routes
app.use('/', require('./routes/tasks'))

app.listen(settings.port)
