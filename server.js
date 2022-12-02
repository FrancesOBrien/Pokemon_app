const express = require('express')

const app = express()
const port = 3000
const pokemon = require('./models/pokemon.js')
// const index = require('./views/Index.jsx')

  app.set('view engine', 'jsx') 
  app.engine('jsx', require('express-react-views').createEngine())

//get route welcome
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {Pokemon: pokemon})
})




app.listen(3000, () => {
    console.log('listening now');
})