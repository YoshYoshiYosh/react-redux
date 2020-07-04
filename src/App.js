import React from 'react';
import PropTypes from 'prop-types';

const App = () =>  {
  const profiles = [
    { name: "Taro",   age: 10 },
    { name: "Hanako", age: 20 },
    { name: "noname"}
  ]
  return (
    <div>
      {
        profiles.map(({name, age}, index) => <User name={name} age={age} key={index} />)
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I'm {props.name}! I'm {props.age} years old.</div>
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default App;
