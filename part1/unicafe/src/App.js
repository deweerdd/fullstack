import React, { useState } from 'react'
import Button from './Button'

const App = () => {
    //save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const goodClick = () => setGood(good + 1)
    const neutralClick = () => setNeutral(neutral +1)
    const badClick = () => setBad(bad + 1)

    return (
        <div>
        <h1>Give Feedback</h1>    
        <Button text="good" handleClick={goodClick} />
        <Button text="neutral" handleClick={neutralClick} />
        <Button text="bad" handleClick={badClick} />
        <h1>Statistics</h1>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        </div>
    )
}

export default App