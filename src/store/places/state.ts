import { Feature } from "@/interfaces/places";

export interface PlacesState {
    isLoading: boolean
    userLocation?: [number, number] // lng, lat
    loadingPlaces: boolean
    places: Feature[]
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocation: undefined,
        loadingPlaces: false,
        places: []
    }
}

export default state;