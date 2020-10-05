import React from 'react'

function PersonForm({ handleSubmit, addNewContact, newName, newNumber, setNewName, setNewNumber }) {
  return (
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
  )
}
export default PersonForm;