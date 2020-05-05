<script>
import { createEventDispatcher } from 'svelte';
import Flatpickr from 'svelte-flatpickr'
import 'flatpickr/dist/flatpickr.css'
import 'flatpickr/dist/themes/light.css'
import moment from 'moment';
import { fields } from '../../store';
const dispatch = createEventDispatcher();

let textSearch;
let searchdata ={
    employeeId : '',
    employeeName : '',
    fromDate : '',
    toDate : ''
}
let yes = false;
const search = () => {
    if(yes)
    {
        textSearch = "";
        dispatch('searchadvance',{searchdata : searchdata});
    }
    else{
        dispatch('search',{textSearch : textSearch});
    }
};
    const flatpickrOptionsFromDate = {
        element: '#my-picker_fromdate',
    }  
    const flatpickrOptionsToDate = {
        element: '#my-picker_todate',
    }  

</script>
{#if $fields}
<form>
    <div class="input-group">
        <input class="form-control" bind:value={textSearch} type="text" placeholder="{$fields.attendance.placeholder.search}" aria-label="Search" />
        <div class="input-group-append">
            <button type="submit" class="input-group-text" on:click|preventDefault={search}><i class="fas fa-search text-grey" aria-hidden="true"></i></button>
        </div>
    </div>
    <br>
    <div>
        <input type=checkbox bind:checked={yes} id="advance">
        <label>{$fields.attendance.attendance.advancesearch}</label>
    </div>

    {#if yes}
    <div id="advancesearch">
    <div>
        <label>{$fields.attendance.attendance.employeeid}:</label>
        <input type="number" bind:value={searchdata.employeeId} min=1/>
        <br>
        <label>{$fields.attendance.attendance.employeename}:</label>
        <input type="text" bind:value={searchdata.employeeName}/>
    </div>
    <div>
        <label>{$fields.attendance.attendance.fromdate}:</label>
        <Flatpickr id="flatfromdate" options="{ flatpickrOptionsFromDate }" bind:value={searchdata.fromDate} element="#my-picker_fromdate"> 
                    <div class="flatpickr" id="my-picker_fromdate" data-date-format="d/m/Y" style="display:inline-block">
                        <input type="text" id="fromdate" placeholder="{$fields.attendance.placeholder.selectdate}" data-input >
                    </div>
        </Flatpickr>
        <br>
        <label>{$fields.attendance.attendance.todate}:</label>
        <Flatpickr id="flattodate"  options="{ flatpickrOptionsToDate }" bind:value={searchdata.toDate} element="#my-picker_todate"> 
                    <div class="flatpickr" id="my-picker_todate" data-date-format="d/m/Y" style="display:inline-block">
                        <input type="text" id="todate" placeholder="{$fields.attendance.placeholder.selectdate}" data-input >
                    </div>
        </Flatpickr>
    </div>
    <br>
    </div>
    {/if}
</form>
{/if}
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