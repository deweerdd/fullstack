import { useEffect, useState } from 'react'
import axios from 'axios'
import CountrysDisplay from './components/CountrysDisplay'
import LanguageDisplay from './components/LanguageDisplay'
import FlagDisplay from './components/FlagDisplay'
import WeatherDisplay from './components/WeatherDisplay'

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  }

  const result = !filter
    ? countries
    : countries.filter((c => c.name.toLowerCase().includes(filter.toLowerCase())
    ))


  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const display = (result) => {
    if (result.length > 10) {
      return <div>Too many matches, specify another filter</div>
    }

    if (result.length === 1) {
      return (
        result.map(country =>
          <div key={country.name}>
            <h1>{country.name}</h1>
            <div>Capital: {country.capital}</div>
            <div>Population: {country.population}</div>
            <h2>languages</h2>
            <ul>
              {country.languages.map((language => <LanguageDisplay key={country.name + language.name} language={language.name} />))}
            </ul>
            <FlagDisplay flag={country.flag} name={country.name} />
            <WeatherDisplay capital={country.capital} />
          </div>))
    }
    else {
      return (
        result.map(country =>
          <div key={country.name}>
            <CountrysDisplay result={country.name} onClick={() => setFilter(country.name)} />
          </div>))
    }
  }

  return (
    <div>find countries:
      <input onChange={handleChange}></input>
      {display(result)}
    </div>
  );
}

export default App;
