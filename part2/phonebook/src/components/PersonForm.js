import React from 'react'
const PersonForm = ({ onSubmit, newName, newPhone, onPersonChange, onPhoneChange }) => {
    console.log(newName)
    console.log(newPhone)
    return (
        <form onSubmit={onSubmit}>
            <h2>Add Contact:</h2>
            <div>
                name: <input value={newName} onChange={onPersonChange} />
            </div>
            <div>
                phone: <input value={newPhone} onChange={onPhoneChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm