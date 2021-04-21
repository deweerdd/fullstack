import React from 'react';

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            { course.parts.map(c => <div key={c.id}>{c.name} {c.exercises}</div>)}
        </div>
    )
}

const Total = ({ course }) => {
    return (
        <div>Total exercises {course.parts.reduce((sum, c) => sum + c.exercises, 0)}</div>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course