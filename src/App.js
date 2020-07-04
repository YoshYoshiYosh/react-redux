import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input id="bar" type="text" onChange={() => {console.log('Changed.')}} />
      </React.Fragment>
    )
  }
}

export default App;
