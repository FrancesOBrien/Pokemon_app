const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Create New Pokemon!</h1>
        <form action='/pokemon' method='POST'>
          Name: <input type='text' name='name' />
          <br />
          Image: <input type='text' name='image' />
          <br /> 
          <input type='submit' name='' value='Add Pokemon' />
        </form>
      </div>
    );
  }
}

module.exports = New;