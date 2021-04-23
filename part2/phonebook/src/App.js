import React, { useState } from 'react'
import Record from './components/Record'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const [newName, setName] = useState('')

  const handlePerson = (event) => {
    setName(event.target.value)
  }

  const addNewPersons = (event) => {
    event.preventDefault()
    const newPersonObj = {
      name: newName,
    }
    setPersons(persons.concat(newPersonObj))
    setName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPersons}>
        <div>
          name: <input value={newName} onChange={handlePerson} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Record key={person.name} persons={person} />
      )}
    </div>
  )
}

export default App