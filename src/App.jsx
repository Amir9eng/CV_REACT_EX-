import React, { useState } from 'react'
import SearchForm from "./components/SearchForm"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"


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
    let newName = e.target.name.value
    let newNumber = e.target.phoneNumber.value

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
      <SearchForm handleSearch ={e => addNewContact(e)} />
      <input id="search" type="text" placeholder="Search Contact" value={query} onChange={(e) => setQuery(e.target.value)} />
      <PersonForm addNewContact= {addNewContact} newName= {newName} newNumber= {newNumber} setNewName= {setNewName} setNewNumber= {setNewNumber} />
      <h2>Numbers</h2>
      <Persons personToShow={personToShow}/>
      {/* {

        personToShow.map(person => (<p key={person.id}><span>{person.name} &nbsp; </span><span>{person.phoneNumber}</span></Persons>))
      } */}
    </div>
  )
}

export default App


