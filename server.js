const express = require('express')
const app = express()
const port = 3000

//get route welcome
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>')
})




app.listen(3000, () => {
    console.log('listening now');
})