import React, { useState } from 'react'
import './App.css';


export const generateId = () => Math.random().toString(36).substring(2, 6)


const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', phoneNumber: '08099543211' },
    { id: 2, name: 'Ada LoveLace', phoneNumber: '39-44-556013' },
    { id: 3, name: 'Dan Abramov', phoneNumber: '217-16-660040' },
    { id: 4, name: 'Mary Poppins', phoneNumber: '616-39-374784' }
  ])
  const [query, setQuery] = useState("")

  const personToShow = query.trim() ? persons.filter(person => person.name.toLowerCase().indexOf(query.toLowerCase().trim()) > -1) : persons

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const addNewContact = (e) => {
    e.preventDefault();

    if (persons.some(person => person.name.toLowerCase().trim() === newName.trim().toLowerCase())) {

      setNewName('')
      setNewNumber('')

      return window.alert(`${newName} has already been added to the phonebook `)

    }


    const newInput = {
      id: generateId(),
      name: newName,
      phoneNumber: newNumber
    }
    setPersons([
      ...persons,
      newInput
    ])
    setNewNumber('')
    setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>

      <input id="search" type="text" placeholder="Search Contact" value={query} onChange={(e) => setQuery(e.target.value)} />
      <form onSubmit={e => addNewContact(e)}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id='name' type="text"
            placeholder="Add Name"
            value={newName} name="name"
            onChange={e => setNewName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="number">Number: </label>
        {/* number:  <input value={newNumber} type="number" id="number" onChange={e => setNewNumber(e.target.value)} /> */}
          < input
            id='number' type="number"
            placeholder="Add Number"
            value={newNumber} number="number"
            onChange={e => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {

        personToShow.map(person => (<p key={person.id}><span>{person.name} &nbsp; </span><span>{person.phoneNumber}</span></p>))
      }
    </div>
  )
}

export default App


