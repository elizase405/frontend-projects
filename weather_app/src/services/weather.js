import axios from "axios"

const key = import.meta.env.VITE_API_KEY

const getLocation = ( city ) => {
    return axios
        .get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`)
        .then(res => res.data)
}

const getWeather = ( lat, lon ) => {
    return axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
        .then(res => res.data)
}


export default {
    getLocation: getLocation,
    getWeather: getWeather,
}