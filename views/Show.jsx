const React = require('react');
const pokemon = require('../models/pokemon');
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

  class Show extends React.Component {
    render() {
    const Pokemon = this.props.Pokemon
    return (
     <div>
      <h1 style={myStyle}>Gotta Catch 'Em All</h1>
      <h2>{Pokemon.name.substring(0,1) + Pokemon.name.substring(1)}</h2>
      <img src={Pokemon.img + '.jpg'}></img>
      <a href={'/pokemon'}>Back</a>
      </div>)
    }
  }

module.exports = Show
