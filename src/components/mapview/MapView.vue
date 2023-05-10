<script lang="ts" src="./MapView.ts"></script>

<template>
    <div v-if="!userLocationReady"
         class="loading d-flex justify-content-center align-items-center">
        <div class="text-center">
            <h3>Espere, por favor...</h3>
            <span>Localizando...</span>
        </div>
    </div>

    <div v-show="userLocationReady"
         class="map-container"
         ref="mapElement">

    </div>

</template>

<style scoped>
.loading{
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.8);
}

.map-container{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgb(166, 230, 241);
}
</style>