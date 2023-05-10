import { computed, defineComponent, ref } from "vue";
import SearchResult from "../searchresults/SearchResult.vue";

import { usePlaces } from "@/composables";


export default defineComponent({
    name: 'SearchBar',
    components:{SearchResult},
    setup(){

        const debounceTimeout = ref();
        const debounceValue = ref('');

        const { searchPlacesByTerm } = usePlaces();

        return {
            debounceValue, 
      
            searchTerm: computed({
              get() {
                return debounceValue.value;
              },
              set( val: string) {
      
                if ( debounceTimeout.value ) clearTimeout( debounceTimeout.value );
                
                debounceTimeout.value = setTimeout(() => {
                  debounceValue.value = val;
                  searchPlacesByTerm( val );
                }, 500 );
              }
            })
      
          }
    }
})