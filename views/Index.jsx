const React = require('react')
const myStyle = {
  
  color: '#ffffff',
  backgroundColor: '#000000',
  }
const pageStyle = {
  color: '#ffffff',
  backgroundColor: '#ffcc99',
  fontFamily: 'Arial',
  fontSize: '20px'
}

  class Index extends React.Component {
    render() {
    const { Pokemon } = this.props
    return (
     <div>
      <h1 style={myStyle}>See All The Pokemon</h1>
      <body style={pageStyle}>
      <ul>
        {Pokemon.map((pokemon, i) => {
          return (
            <li>
              <a href={`/pokemon/${pokemon.id}`}>
                {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              </a>
            </li>
          )
        })}
      </ul>
      <a href={'/pokemon/new'}>Create New</a>
      </body>
      </div>)
    }
  }

module.exports = Index
