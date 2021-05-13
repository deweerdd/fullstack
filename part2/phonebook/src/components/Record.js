import React from 'react'

const Record = ({ persons, deletePerson }) => {
    return (
        <div>
            {persons.name} {persons.number}
            <button onClick={deletePerson}>delete</button>
        </div>
    )
}

export default Record