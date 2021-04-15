import React, { useState } from 'react'
import Button from './Button'

const App = () => {
    const [clicks, setClicks] = useState({
        good: 0, neutral: 0, bad: 0, all: 0
    })

    const goodClick = () => {
        const newClicks = {
            ...clicks,
            good: clicks.good + 1,
            all: clicks.all + 1
        }
        setClicks(newClicks)
    }

    const neutralClick = () => {
        const newClicks = {
            ...clicks,
            neutral: clicks.neutral + 1,
            all: clicks.all + 1
        }
        setClicks(newClicks)
    }
    const badClick = () => {
        const newClicks = {
            ...clicks,
            bad: clicks.bad + 1,
            all: clicks.all + 1,
        }
        setClicks(newClicks)
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button text="good" handleClick={goodClick} />
            <Button text="neutral" handleClick={neutralClick} />
            <Button text="bad" handleClick={badClick} />
            <h1>Statistics</h1>
            <div>good {clicks.good}</div>
            <div>neutral {clicks.neutral}</div>
            <div>bad {clicks.bad}</div>
            <div>all {clicks.all}</div>
            <div>average {(clicks.good - clicks.bad) / clicks.all}</div>
            <div>positive {clicks.good / (clicks.all)}</div>
        </div>
    )
}

export default App