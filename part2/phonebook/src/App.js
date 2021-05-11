import React, { useEffect, useState } from 'react'
import Record from './components/Record'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'
import PersonService from './services/Person'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newSearch, setSearch] = useState('')

  const [newName, setName] = useState('')

  const [newPhone, setPhone] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handlePerson = (event) => {
    setName(event.target.value)
  }

  const handlePhone = (event) => {
    setPhone(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const result = !newSearch
    ? persons
    : persons.filter(p => p.name.toLowerCase().includes(newSearch.toLowerCase())
    );

  const addNewPersons = (event) => {
    event.preventDefault();

    if (persons.find(p => p.name === newName)) {
      alert(`${newName} is already in the phonebook`)
      setPersons(persons)
    } else {
      const newPersonObj = {
        name: newName,
        phone: newPhone,
      }
      PersonService
        .createPerson(newPersonObj)
        .then(returnedNote => {
          setPersons(persons.concat(returnedNote))
          setName('')
          setPhone('')
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} handleSearch={handleSearch} />
      <PersonForm onSubmit={addNewPersons} newName={newName} newPhone={newPhone} onPersonChange={handlePerson} onPhoneChange={handlePhone} />
      <h2>Numbers</h2>
      {result.map(person =>
        <Record key={person.name} persons={person} />
      )}
    </div>
  )
}

export default App