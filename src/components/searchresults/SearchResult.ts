import { useMap, usePlaces } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
    name: 'SearchResult',
    setup(){

        const {loadingPlaces, places, userLocation} = usePlaces()
        const activePlace = ref('')
        const {map, setPlaceMarkers, getRouteBetweenPoints} = useMap()

        watch(places, (newPlaces) => {
            activePlace.value = ''
            setPlaceMarkers(newPlaces)
        })
 
        return{
            loadingPlaces,
            places,
            activePlace,

            placeClicked: (place: Feature) => {
                const [ lng, lat ] = place.center


                map.value?.flyTo({
                    center: [ lng, lat ],
                    zoom: 14
                })
            },

            getRouteDirections: (place: Feature) => {
                if ( !userLocation.value ) return;
                
                const [ lng, lat ] = place.center;
                
                const [startLng, startLat ] = userLocation.value;
        
                const start: [number, number] = [startLng, startLat];
                const end  : [number, number] = [lng, lat];
        
                getRouteBetweenPoints( start, end );
            }
        }
    }
})