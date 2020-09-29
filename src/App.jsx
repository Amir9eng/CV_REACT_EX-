
import React, { useState } from 'react'

export const generateId = () => Math.random().toString(36).substring(2, 6)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: generateId() }
  ])
  const [newName, setNewName] = useState('')

  const addNewName = (e) => {
    e.preventDefault();
    const newInput = {}
    setPersons(persons => persons.concat({
      id: generateId(),
      name: newName
    }))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={e => addNewName(e)}>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>{
       persons.map(person => <p key={person.id}>{person.name}</p>)
      } </p>
    </div>
  )
}

export default App

