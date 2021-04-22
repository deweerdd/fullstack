import React from 'react';

const Header = () => {
    return (
        <h1>Web development curriculum</h1>
    )
}

const Content = ({ course }) => {
    var part = course.map(function (c) {
        return (
            <div key={c.id}>
                <h2>{c.name}</h2>
                {c.parts.map(function (p) {
                    return (
                        <div key={p.id}>{p.name} {p.exercises}</div>
                    )
                })}
                <div>Total exercises {c.parts.reduce((sum, t) => sum + t.exercises, 0)}</div>
            </div>
        )
    })

    return (
        <div>{part}</div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header />
            <Content course={course} />
        </div>
    )
}

export default Course