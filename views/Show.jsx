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
    const { Pokemon } = this.props
    return (
     <div>
      <body style={indexStyle}>
      <h1 style={myStyle}>Gotta Catch 'Em All</h1>
      <h2>{Pokemon.name.substring(0,1) + Pokemon.name.substring(1)}</h2>
      <img src={Pokemon.image + '.jpg'}></img>
      <br /> 
      <a href={'/pokemon'}>Back</a>
      </body>
      </div>)
    }
  }

module.exports = Show
