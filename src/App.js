import React, { Component } from 'react';

const App = () => <Counter />

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  changeCount(plusOrMinus, changeValue) {
    const changeNum = (plusOrMinus === 'plus') ? changeValue : -changeValue
    this.setState({count: this.state.count + changeNum})
  }

  render() {
    console.log("rendered.")
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        
        {numbers.map((num, index) => {
          return (
            <React.Fragment key={index}>
              <button onClick={() => this.changeCount('plus', num)}>+{num}</button>
              <button onClick={() => this.changeCount('minus',num)}>-{num}</button>
            </React.Fragment>
          )
        })}
      </React.Fragment>
    )
  }
}

export default App;
