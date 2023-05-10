import { useMap, usePlaces } from "@/composables";
import { defineComponent, onMounted, ref, watch } from "vue";
import Mapboxgl from 'mapbox-gl'

export default defineComponent({
    name: 'Mapview',
    setup(){

        const mapElement = ref<HTMLDivElement>()
        const {userLocation, userLocationReady} = usePlaces()
        const {setMap} = useMap()

        const initMap = async () => {
            if ( !mapElement.value ) throw new Error('Div Element no exits')
            if ( !userLocation.value ) throw new Error('User Location no existe')

            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 14, // starting zoom
            })

            const locationPopup = new Mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(`
                    <h4>Aqui estoy</h4>
                    <p>Actualmente en San Cristobal</p>
                `)

            const myLocation = new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(locationPopup)
                .addTo(map)

                
            setMap(map)    


        }

        onMounted(() => {
            if(userLocationReady.value) 
                return initMap()

        })

        watch(userLocationReady, (newVal) => {
            if(userLocationReady.value) 
                initMap()
        })


        return {
            userLocationReady,
            mapElement
        }
    }
})