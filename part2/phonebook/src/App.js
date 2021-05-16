import React, { useEffect, useState } from 'react'
import './index.css'
import Record from './components/Record'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonService from './services/Person'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newSearch, setSearch] = useState('')

  const [newName, setName] = useState('')

  const [newPhone, setPhone] = useState('')

  const [message, setMessage] = useState(null)

  useEffect(() => {
    PersonService
      .getPersons()
      .then(initialPersons => {
        setPersons(initialPersons)
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

  let deletePerson = (id) => {
    const newList = persons.filter(p => p.id !== id)
    if (window.confirm(`Delete Record ${id}`)) {
      PersonService.deletePerson(id).then(response => {
        setPersons(newList);
      })
    }
  }

  const addNewPersons = (event) => {
    event.preventDefault();

    const newPersonObj = {
      name: newName,
      number: newPhone,
    }

    if (persons.find(p => p.name === newName)) {
      if (window.confirm(`${newName} is already in the phonebook, replace the old number?`)) {
        const newPersonsId = persons.find(p => p.name === newName)
        PersonService
          .updatePerson(newPersonObj, newPersonsId.id)
          .then(() => {
            PersonService
              .getPersons()
              .then(initialPersons => {
                setPersons(initialPersons);
                setName('')
                setPhone('')
                setMessage(`Updated number for ${newName}`);
                setTimeout(() => { setMessage(null) }, 5000);
              })
          }).catch(error => {
            setMessage(`Error: ${newName} already Deleted`)
            setTimeout(() => { setMessage(null) }, 5000);
          })
      }
    } else {
      PersonService
        .createPerson(newPersonObj)
        .then(response => {
          setPersons(response)
        }).then(response => {
          setName('')
          setPhone('')
          setMessage(`Added ${newName} to the phonebook`);
          setTimeout(() => { setMessage(null) }, 5000);
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter newSearch={newSearch} handleSearch={handleSearch} />
      <PersonForm onSubmit={addNewPersons} newName={newName} newPhone={newPhone} onPersonChange={handlePerson} onPhoneChange={handlePhone} />
      <h2>Numbers</h2>
      {result.map(person =>
        <Record key={person.id} persons={person} deletePerson={() => deletePerson(person.id)} />
      )}
    </div>
  )
}

export default App