const express = require('express')

const app = express()
const port = 3000
//must be required in addition to models/schema page
require("dotenv").config();
const mongoose = require("mongoose")
const pokemon = require('./models/pokemon.js')
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection

// Global configuration

// Connect to Mongo
mongoose.connect(mongoURI)

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

// const manyPokemons = [
//     { name: "bulbasaur", image: "http://img.pokemondb.net/artwork/bulbasaur" },
//     { name: "ivysaur", image: "http://img.pokemondb.net/artwork/ivysaur" },
//     { name: "venusaur", image: "http://img.pokemondb.net/artwork/venusaur" },
//     { name: "charmander", image: "http://img.pokemondb.net/artwork/charmander" },
//     { name: "charizard", image: "http://img.pokemondb.net/artwork/charizard" },
//     { name: "squirtle", image: "http://img.pokemondb.net/artwork/squirtle" },
//     { name: "wartortle", image: "http://img.pokemondb.net/artwork/wartortle" }
// ]
// const index = require('./views/Index.jsx')
app.use((req, res, next) => {
    console.log("I run for all routes")
    next()
})

app.use(express.urlencoded({ extended: false }))
mongoose.set("strictQuery", true)

  app.set('view engine', 'jsx') 
  app.engine('jsx', require('express-react-views').createEngine())

//   pokemon.insertMany(manyPokemons)
//   // if database transaction succeeds
//   .then((pokemon) => {
//       console.log(pokemon)
//   })
//   // if database transaction fails
//   .catch((error) => {
//       console.log(error)
//   })
//   // close db connection either way
//   .finally(() => {
//       db.close()
//   })
//get route welcome
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>')
})


//index
// app.get('/pokemon', (req, res) => {
//     res.render('Index', {Pokemon: pokemon})
// })
app.get('/pokemon', (req, res) => {
    // console.log(pokemon)
    pokemon.find({}, (error, Pokemon) => {
      res.render('Index', {
        Pokemon: Pokemon, // getting all fruits from db to pass as props
      })
    })
  })
//new
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})
//delete & update--disregard for now

//create
app.post('/pokemon', (req, res) => {
    console.log(req.body)
    pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect('/pokemon')
    })
})
// edit--also disregard for now

//show
// app.get('/pokemon/:id', (req, res) => {
//     res.render('Show', {Pokemon: pokemon[req.params.id]})
// })
app.get("/pokemon/:id", function (req, res) {
    pokemon.findById(req.params.id, (err, foundPokemon) => {
      res.render("Show", {
        Pokemon: foundPokemon,
      })
    })
  })

app.listen(3000, () => {
    console.log('listening now');
})




