<script>
import { createEventDispatcher } from 'svelte';
import Flatpickr from 'svelte-flatpickr'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/light.css'

const dispatch = createEventDispatcher();

let textSearch;

const search = () => {
    dispatch('search',{textSearch : textSearch});
};
let searchdata ={
    employeeId : '',
    employeeName : '',
    fromDate : '',
    toDate : ''
}
let yes = false;
let date = null;
    const flatpickrOptionsFromDate = {
        element: '#my-picker_fromdate',
    }  
    const flatpickrOptionsToDate = {
        element: '#my-picker_todate',
    }  

</script>

<form>
    <div class="input-group">
        <input class="form-control" bind:value={textSearch} type="text" placeholder="Search only ID,Employee ID,Employee Name" aria-label="Search" />
        <div class="input-group-append">
            <button type="submit" class="input-group-text" on:click|preventDefault={search}><i class="fas fa-search text-grey" aria-hidden="true"></i></button>
        </div>
    </div>
</form>
