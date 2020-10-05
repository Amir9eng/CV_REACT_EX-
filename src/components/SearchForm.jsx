import React from 'react'

const SearchForm = ({ handleSearch }) => {
  return (
    <p>
      <input type="search" onChange={handleSearch} />
    </p>
  )
}


export default SearchForm;