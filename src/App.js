import React from 'react';

const App = () =>  {
  const profiles = [
    { name: "Taro",   age: 10 },
    { name: "Hanako", age: 20 },
    { name: "noname "}
  ]
  return (
    <div>
      {
        profiles.map(({name, age}, index) => <User name={name} age={age} key={index} />)
      }
    </div>
  )
}

const User = (props) =>  {
return <div>Hi, I'm {props.name}! I'm {props.age} years old.</div>
}

User.defaultProps = {
  age: 100
}

export default App;
