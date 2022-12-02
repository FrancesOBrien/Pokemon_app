const React = require('react')
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

  class MyFirstComponent extends React.Component {
    render() {
    const { Pokemon } = this.props
    return (
     <div>
      <h1 style={myStyle}>See All The Pokemon</h1>
      <ul>
        {Pokemon.map((pokemon, i) => {
          return (
            <li>
              <a href={'/pokemon/${i}'}>
                {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              </a>
            </li>
          )
        })}
      </ul>
      </div>)
    }
  }

module.exports = MyFirstComponent

{/* <a href={`/pokemon/${i}`}>{pokemon[i].name[0].toUpperCase() + pokemon[i].name.slice(1)}</a> */}