import React, { useState } from 'react'
import Record from './components/Record'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      phone: '7753387139'
    }
  ])

  const [newSearch, setSearch] = useState('')

  const [newName, setName] = useState('')

  const [newPhone, setPhone] = useState('')

  const handlePerson = (event) => {
    setName(event.target.value)
  }

  const handlePhone = (event) => {
    setPhone(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const addNewPersons = (event) => {
    event.preventDefault()

    if (persons.find(p => p.name === newName)) {
      alert(`${newName} is already in the phonebook`)
      setPersons(persons)
    } else {
      const newPersonObj = {
        name: newName,
        phone: newPhone,
      }
      setPersons(persons.concat(newPersonObj))
      setName('')
      setPhone('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        search: <input onChange={handleSearch} />
      </div>
      <form onSubmit={addNewPersons}>
        <h2>Add Contact:</h2>
        <div>
          name: <input value={newName} onChange={handlePerson} />
        </div>
        <div>
          phone: <input value={newPhone} onChange={handlePhone} />
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