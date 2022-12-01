const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const pokemon = require('./models/pokemon.js')
// const index = require('./views/Index.jsx')

app.engine('jsx', (filePath, options, callback) => { 
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err)
      const rendered = content.toString()
      return callback(null, rendered)
    })
  })
  app.set('views', './views') 
  app.set('view engine', 'jsx') 
  

//get route welcome
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>')
})

app.get('/pokemon', (req, res) => {
    res.render('Index')
})




app.listen(3000, () => {
    console.log('listening now');
})