require("dotenv").config()
const express = require('express')

const app = express()
const port = 3000
//must be required in addition to models/schema page  
const mongoose = require("mongoose")
const Pokemon = require('./models/pokemon.js')
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection
const methodOverride = require('method-override')

//middleware
app.use(methodOverride('_method'))

// Global configuration

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

// const manyPokemons = 
//Seed route - populate the database for testing
app.get("/pokemon/seed", (req, res) => {
  Pokemon.create([
  { name: "bulbasaur", image: "http://img.pokemondb.net/artwork/bulbasaur" },
    { name: "ivysaur", image: "http://img.pokemondb.net/artwork/ivysaur" },
   { name: "venusaur", image: "http://img.pokemondb.net/artwork/venusaur" },
   { name: "charmander", image: "http://img.pokemondb.net/artwork/charmander" },
  { name: "charizard", image: "http://img.pokemondb.net/artwork/charizard" },
    { name: "squirtle", image: "http://img.pokemondb.net/artwork/squirtle" },
{ name: "wartortle", image: "http://img.pokemondb.net/artwork/wartortle" }
 ]
)})
// const index = require('./views/Index.jsx')
app.use((req, res, next) => {
    console.log("I run for all routes")
    next()
})

app.use(express.urlencoded({ extended: false }))
mongoose.set("strictQuery", true)

  app.set('view engine', 'jsx') 
  app.engine('jsx', require('express-react-views').createEngine())

//get route welcome
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>')
})

//index
app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (error, pokemon) => {
      res.render('Index', {
        pokemon: pokemon,
      })
    })
  })
//new
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})
//delete this one record
app.delete('/pokemon/:id', (req, res)=>{
  Pokemon.findByIdAndRemove(req.params.id, (err, data)=>{
      res.redirect('/pokemon');
  })
})
//Update--Modify a record
app.put('/pokemon/:id', (req, res)=>{
  Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon)=>{
     console.log(updatedPokemon)
      res.redirect(`/pokemon/${req.params.id}`)
  })
})
//create
app.post('/pokemon', (req, res) => {
    console.log(req.body)
    Pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect('/pokemon')
    })
})
// edit--get the form with the record to update
app.get('/pokemon/:id/edit', (req, res)=>{
  Pokemon.findById(req.params.id, (err, foundPokemon)=>{ 
    if(!err){
      res.render(
        'Edit',
      {
        pokemon: foundPokemon 
      }
    )
  } else {
    res.send({ msg: err.message })
  }
  })
})
//show
app.get("/pokemon/:id", function (req, res) {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
      res.render("Show", {
        pokemon: foundPokemon,
      })
    })
  })

app.listen(3000, () => {
    console.log('listening now');
})




