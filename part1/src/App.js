import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      greeting app created by <a href="https://github.com/deweerd">deweerdd</a>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" age={26+10} />
      <Hello name="Tim" age={25} />
      <Footer />
    </div>
  )
}

export default App