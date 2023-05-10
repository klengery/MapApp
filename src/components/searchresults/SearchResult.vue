<script lang="ts" src="./SearchResult.ts"></script>

<template>

    <div v-if="loadingPlaces" class="alert alert-primary text-center">
        <h5>Cargando</h5>
        <span>Espere por favor...</span>
    </div>
    
    <ul v-else-if="places.length > 0" 
        class="list-group mt-3">

        <li v-for="place in places"
            :key="place.id"
            :class="{ 'active' : place.id === activePlace }"
            class="list-group-item list-group-item-action text-left"
            @click="placeClicked(place)"
        >
            
            <h6>{{ place.text }}</h6>
            <p>{{ place.place_name }}</p>

            <div align="right">
                <button 
                    class="btn btn-outline-primary btn-sm"
                    :class="( place.id === activePlace ) ? 'btn-outline-light' : 'btn-outline-primary'"
                    @click.self="getRouteDirections(place)"
                >
                    Direcciones
                </button>
            </div>

        </li>

     </ul>

</template>

<style scoped>
    li{
        cursor: pointer;
    }

    h6{
        font-size: 13px !important;
    }

    p{
        font-size: 10px !important;
    }

</style>