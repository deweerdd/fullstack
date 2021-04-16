import React from 'react'
import Statistic from './Statistic'

const Statistics = ({ clicks }) => {
    let average = ((clicks.good - clicks.bad) / clicks.all)
    let positive = (clicks.good / clicks.all) * 100
    
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
            <table>
                <tbody>
                    <Statistic text="good" value={clicks.good} />
                    <Statistic text="neutral" value={clicks.neutral} />
                    <Statistic text="bad" value={clicks.bad} />
                    <Statistic text="all" value={clicks.all} />
                    <Statistic text="average" value={average} />
                    <Statistic text="positive" value={positive} />
                </tbody>
            </table>
        </div>
    )
}

export default Statistics