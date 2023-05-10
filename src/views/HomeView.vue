<template>
  <div class="home">
    <MapView />
    <SearchBar />
    <LocationBtn />
    <TripDetail />
  </div>
</template>

<script lang="ts">
import { usePlaces } from '@/composables';
import { defineComponent } from 'vue';

import MapView from '@/components/mapview/MapView.vue'
import SearchBar from '@/components/searchbar/SearchBar.vue';
import LocationBtn from '@/components/my-location-btn/LocationBtn.vue';
import TripDetail from '@/components/trip-details/TripDetail.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MapView,
    SearchBar,
    LocationBtn,
    TripDetail
  },
  setup(){
    usePlaces()
  }
});
</script>
