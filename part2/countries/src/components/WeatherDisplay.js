import axios from "axios"
import { useEffect, useState } from "react"

const WeatherDisplay = ({ capital }) => {

    const [weather, setWeather] = useState({});

    useEffect(() => {
        const api_key = process.env.REACT_APP_API_KEY
        axios
            .get("http://api.weatherstack.com/current",
                {
                    params: {
                        access_key: api_key,
                        query: capital
                    }
                })
            .then(response => {
                setWeather(response.data.current)
            })
    }
        , [capital])

    return (
        <div>
            <h2>
                Weather for: {capital}
            </h2>
            <div>Current Temperature: {weather.temperature}</div>
            <div>Wind Speed: {weather.wind_speed}</div>
        </div>
    )
}

export default WeatherDisplay