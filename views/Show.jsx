const React = require('react');
const pokemon = require('../models/pokemon');
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  }
const indexStyle = {
  color: '#ffffff',
  backgroundColor: '#009999',
  fontFamily: 'Arial',
  fontSize: '20px'
}

  class Show extends React.Component {
    render() {
    const { pokemon } = this.props
    return (
     <div>
      <body style={indexStyle}>
      <h1 style={myStyle}>Gotta Catch 'Em All</h1>
      <h2>{pokemon.name.substring(0,1) + pokemon.name.substring(1)}</h2>
      <img src={`http://img.pokemondb.net/artwork/${pokemon.name.toLowerCase()}.jpg`}></img>
      <br /> 
      <a href={'/pokemon'}>Back</a>
      <br/>
      <a href={`/pokemon/${pokemon.id}/edit`}>Edit This Pokemon</a>
      </body>
      </div>)
    }
  }

module.exports = Show
