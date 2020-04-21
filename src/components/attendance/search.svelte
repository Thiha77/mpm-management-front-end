<script>
import { createEventDispatcher } from 'svelte';
import Flatpickr from 'svelte-flatpickr'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/light.css'
import moment from 'moment';
const dispatch = createEventDispatcher();

let textSearch;

const search = () => {
    dispatch('search',{textSearch : textSearch});
};
const searchadvance = () => {
    console.log("searchadvance",searchdata);
    let fdate = moment(searchdata.fromDate).format('YYYY-MM-DD HH:mm:ss');
    console.log("fdate",fdate);
    let tdate = moment(searchdata.toDate).format("YYYY-MM-DD HH:mm:ss");
    console.log("tdate",tdate);
    dispatch('searchadvance',{searchdata : searchdata});
}
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
    <br>
    <div>
        <input type=checkbox bind:checked={yes} id="advance">
        <label>Advance Search</label>
    </div>

    {#if yes}
    <div id="advancesearch">
    <div>
        <label>Employee ID:</label>
        <input type="number" bind:value={searchdata.employeeId} min=0/>
        <label>Employee Name:</label>
        <input type="text" bind:value={searchdata.employeeName}/>
    </div>
    <div>
        <label>From Date:</label>
        <Flatpickr id="flatfromdate" options="{ flatpickrOptionsFromDate }" bind:value={searchdata.fromDate} element="#my-picker_fromdate"> 
                    <div class="flatpickr" id="my-picker_fromdate" data-date-format="d/m/Y" style="display:inline-block">
                        <input type="text" id="fromdate" placeholder="Select Date.." data-input >
                    </div>
        </Flatpickr>
        <label>To Date:</label>
        <Flatpickr id="flattodate"  options="{ flatpickrOptionsToDate }" bind:value={searchdata.toDate} element="#my-picker_todate"> 
                    <div class="flatpickr" id="my-picker_todate" data-date-format="d/m/Y" style="display:inline-block">
                        <input type="text" id="todate" placeholder="Select Date.." data-input >
                    </div>
        </Flatpickr>
    </div>
    <br>
    <div>
        <input type="submit" value="Search" on:click|preventDefault={searchadvance}>
    </div>
    </div>
    {/if}
</form>
<style>
    #advancesearch{
        padding: 1rem 1rem;
        background-color: rgb(130, 217, 247);
        border : 1px solid  grey ;
    }
    label{
        text-align: left;
        width : 150px;
    }
    input{
        margin-right: 40px;
    }
</style>