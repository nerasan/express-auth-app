const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

// middleware - set up ejs and ejs layouts
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// use controllers
app.use('/auth', require('./controllers/auth.js'))

app.get('/', function(req, res) {
    res.send('express auth home route')
})

app.listen(8000, ()=>{
    console.log('listening to the spooky sounds of port 8000')
})