import { useState } from 'react'
import { Link } from "react-router-dom"
import weatherService from "../services/weather"


const Form = () => {
    const [city, setCity] = useState("")
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    const handleCity = (event) => {
        setCity(event.target.value)
    }

    const submit = () => {
        weatherService
        .getLocation(city)
        .then(data => {
            console.log(data[0].country)
            setLat(data[0].lat)
            setLon(data[0].lon)
        })
        weatherService
        .getWeather(lat, lon)
        .then(data => {
            return console.log(data)
        })
    }

    return (
        <form className="form">
            <input className="input" type="text" placeholder="City" onChange={handleCity} />
            <button className="button" onClick={submit}>
                <Link className="link" to="/forecast">
                    Forecast
                </Link>
            </button>
            
        </form>
    )
}

export default Form