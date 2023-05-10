<template>
    <button class="btn btn-primary"
            v-if="btnReady"
            @click="onMyLocation">
        Ir a mi Ubicacion 
    </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useMap, usePlaces } from '@/composables';

export default {
    name: 'LocationBtn',
    setup(){

        const {userLocation, userLocationReady} = usePlaces()
        const {map, mapReady} = useMap()

        return {
            btnReady: computed<boolean>(() => userLocationReady.value && mapReady.value),

            onMyLocation: () => {
                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 15
                })
            }
        }
    }
    
}
</script>

<style scoped>
button{
    position: fixed;
    top: 30px;
    right: 30px;
}
</style>