
import React, { useState } from 'react'

export const generateId = () => Math.random().toString(36).substring(2, 6)

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNewName = (e) => {
    e.preventDefault();
    const newName = {}
    newInput[generateId()] = {
      name: newName
    }
    setPersons({
      ...persons,
      ...newInput
    })
      setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={e => addNewName(e)}
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>
      { persons.map(person => <span>{person.name}</span>)}
      </p>
    </div>
  )
}

export default App

