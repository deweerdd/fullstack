import React from 'react'

const Statistics = ({ clicks }) => {
    if (clicks.all === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }
    return (
        <div>
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

export default Statistics