import React, { useState } from 'react'
import Anecdote from './Anecdote'
import Button from './Button'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setVote] = useState(
    [
      0,
      0,
      0,
      0,
      0,
      0
    ])

  const getRandomIndex = () => {
    const rand = Math.floor(Math.random() * 6)

    setSelected(rand)
  }

  const tallyVote = (vote) => {
    const copy = [...points]
    copy[vote] += 1
    setVote(copy)
  }

  let indexOfHighestPoints = points.indexOf(Math.max(...points))

  return (
    <div>
      <h1>Anecdote of the day:</h1>
      <Anecdote anecdotes={anecdotes} selected={selected} />
      <div>has {points[selected]} votes</div>
      <Button text="vote" handleClick={() => tallyVote(selected)} />
      <Button text="next anecdote" handleClick={getRandomIndex} />
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdotes={anecdotes} selected={indexOfHighestPoints} />
      <div>has {points[indexOfHighestPoints]} votes</div>
    </div>
  )
}

export default App