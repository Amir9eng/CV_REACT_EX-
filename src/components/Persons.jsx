import React from 'react'

function Persons({handleSubmit, personToShow}) {
  return (<div>
    <p>
      {
       personToShow.map(person => (<p key={person.id}><span>{person.name} &nbsp; </span><span>{person.phoneNumber}</span></p>))
      }
    </p>
  </div>)
}



export default Persons;