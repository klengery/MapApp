import axios from 'axios'

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1Ijoia2xlbmdlcnkiLCJhIjoiY2xoZ2Fhcjc0MDJ1eTNkcG03ZXhpNmY2MSJ9.HhDZut0aYcU58eXZS02ghg'
    }
})
export default directionsApi