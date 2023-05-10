import { StateInterface } from "@/store/index"
import { computed, onMounted } from "vue"
import { useStore } from "vuex"

export const usePlaces = () => {
    const store = useStore<StateInterface>()

    onMounted( () => {
        if(!store.getters['places/userLocationReady']){
            store.dispatch('places/getInitLocation')
        }
    })
    
    return{
        //State
        isLoading: computed( () => store.state.places.isLoading ),
        userLocation: computed( () => store.state.places.userLocation ),
        places: computed(() => store.state.places.places),
        loadingPlaces: computed(() => store.state.places.loadingPlaces),

        //Getters
        userLocationReady: computed(() => store.getters['places/userLocationReady']),

        //Actions
        searchPlacesByTerm: ( query = '' ) => store.dispatch('places/searchPlacesByTerm', query ),

        //Mutations
    }

}