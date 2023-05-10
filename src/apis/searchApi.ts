import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1Ijoia2xlbmdlcnkiLCJhIjoiY2xoZ2Fhcjc0MDJ1eTNkcG03ZXhpNmY2MSJ9.HhDZut0aYcU58eXZS02ghg'
    }
})
export default searchApi