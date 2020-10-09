import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import "./App.css"

const OneCountry = ({ country }) => (

  <div className="one-country">
    <h2>{country.name}</h2>

    <p><strong>Capital</strong> - {country.capital}
    </p>

    <p><strong>Population</strong> - {country.population}
    </p>
        
    <h2>Languages</h2>
    <ul>
      {
        country.languages.map(language => (<li key={language.name}>{language.name}</li>))
      }
    </ul>
    <img src={country.flag} alt={`${country.name}-flag`} />
  </div>
)

const App = () => {
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState("")

  useEffect(() => {
    Axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => setCountries(res.data))
      .catch(error => alert(`fetching failed, ${error}`))
  }, [])

  const countriesToShow = filtered.trim() ?
    countries.filter(country => country.name.toLowerCase().indexOf(filtered.toLowerCase().trim()) > -1) : []

  return (
    <div className="App">
      <div className="country-to-show">
        <input type="search" placeholder="Find Countries" value={filtered} onChange={e => setFiltered(e.target.value)} />
        <div className="screen">
          {(countriesToShow.length === 1) &&
            <OneCountry country={countriesToShow[0]} />
          }
          {(countriesToShow.length>1 && countriesToShow.length <= 10) && countriesToShow.map (country => (<div style={{cursor:"pointer"}} className="country" key={country.name}>{country.name}</div>))
          }
          { countriesToShow.length > 10  &&  <center>Too many matches, specify an addition filter...</center> }
        </div>
      </div>
    </div>
  )
}

export default App;


