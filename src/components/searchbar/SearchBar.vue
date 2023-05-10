<script lang="ts" src="./SearchBar.ts"></script>

<template>

    <div class="searchbar-container">
        <input 
            class="form-control"
            type="text"
            placeholder="Buscar lugares..."
            v-model="searchTerm"
        >
        
        <SearchResult />

    </div>
    
</template>

<style scoped>
    .searchbar-container{
        position: fixed;
        top: 30px;
        left: 30px;
        background-color: white;
        z-index: 999;
        box-shadow: 10px 8px 10px rgba(0, 0, 0, 0.2);
        border-radius: 10px !important;
        width: 250px;
        overflow: hidden;
        padding: 5;
    }

</style>