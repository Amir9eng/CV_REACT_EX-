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
  const [filtered, setFiltered] = useState([])

  const handleSearch =  (e) => {
    const query = e.target.value 

    if(!query.trim()) setFiltered(() => [] )
    setFiltered((persons)=>{
      persons.filter( person => person.name.trim().toLowerCase().indexOf(query.trim().toLowerCase()) > -1)
    })

  }
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
      <input type= "search"  onChange={handleSearch} />
      <form onSubmit={e => addNewContact(e)}>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        filtered.length ? filtered.map(person => (<p key={person.id}><span>{person.name} &nbsp;</span> <span>{person.phoneNumber}</span></p>))
        : persons.map(person => (<p key={person.id}><span>{person.name} &nbsp;</span> <span>{person.phoneNumber}</span></p>))
      }
    </div>
  )
}

export default App

