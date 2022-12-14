const React = require("react");
const newStyle = {
  color: '#ffffff',
  backgroundColor: '#336699',
  fontFamily: 'Arial',
  fontSize: '20px'
}
const myStyle = {
  
  color: '#ffffff',
  backgroundColor: '#000000',
  }

class New extends React.Component {
  render() {
    return (
      <div>
        <body style={newStyle}>
        <h1 style={myStyle}>Create New Pokemon!</h1>
        <form action='/pokemon' method='POST'>
          Name: <input type='text' name='name' />
          <br />
          {/* Image: <input type='text' name='image' /> */}
          <br /> 
          <input type='submit' name='' value='Add Pokemon' />
        </form>
        </body>
      </div>
    );
  }
}

module.exports = New;

