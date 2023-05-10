import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoia2xlbmdlcnkiLCJhIjoiY2xoZ2Fhcjc0MDJ1eTNkcG03ZXhpNmY2MSJ9.HhDZut0aYcU58eXZS02ghg'

if(!navigator.geolocation){
    throw new Error('Tu navegador no es apto para esta App') 
}




createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
