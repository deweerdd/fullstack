import react from 'react'

const Record = ({ persons }) => {
    return (
        <div>{persons.name} {persons.phone}</div>
    )
}

export default Record