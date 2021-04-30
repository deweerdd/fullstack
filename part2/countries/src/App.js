import {useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  }

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  console.log(countries)

  return (
    <div>find countries: 
      <input onChange={handleChange}></input>
    </div>
  );
}

export default App;
