<script>
    import { createEventDispatcher } from 'svelte';
    import EmployeeSelect from '../employees/employeeSelect.svelte';
    import { fields } from '../../store';
    import Flatpickr from 'svelte-flatpickr'
    import 'flatpickr/dist/flatpickr.css'
    import 'flatpickr/dist/themes/light.css'
    import Time from '../../components/util/Time.svelte';
    import Api from '../../components/util/Api.svelte';
    import { apiInfo } from '../../store.js';
    import moment from 'moment';
    export let attendance;
    let urlEmpData = $apiInfo.basePath + '/employees';
    
     let rdatetime = attendance.recordedDateTime;
     console.log("rdatetime",rdatetime);
    const getChangedEmployeeId = (event) => {
        attendance.employeeId = event.detail.selectedEmployee;
        console.log(event.detail.selectedEmployee);
    };  

    let mhr = moment(rdatetime).format('HH');
    let mmin = moment(rdatetime).format('mm');

    let time ={
        selectedhr : mhr,
        selectedmin : mmin
    }
    const dispatch = createEventDispatcher();
    
    const updateAttendance = () => {
        if(attendance.employeeId == 0 && document.getElementById("recordeddate").value == "")
        {
            alert($fields.attendance.message.valEmpIDRecDate);
            document.getElementById("recordeddate").text = "";  
            return false;
                      
        }
        if(attendance.employeeId == 0)
        {
            alert($fields.attendance.message.valEmpID);
            return false;
        }
        if(document.getElementById("recordeddate").value == "")
        {
            alert($fields.attendance.message.valRecDate);
            document.getElementById("recordeddate").text = "";
            return false;
            
        }
        console.log("attendance.recordeddatetime",attendance.recordedDateTime);
        let date = moment(attendance.recordedDateTime).format('YYYY-MM-DD HH:mm:ss');
        let selectedhr = time.selectedhr.toString().length == 1 ? `0${time.selectedhr}` : time.selectedhr;
        let selectedmin = time.selectedmin.toString().length == 1 ? `0${time.selectedmin}` : time.selectedmin;
        let datetime = date.slice(0,10)+" "+selectedhr+":"+selectedmin+ ":00";
        datetime = moment(datetime).toDate();
        console.log("datetime",datetime);
        attendance = {
            id : attendance.id,
            employeeId : attendance.employeeId,
            recordedDateTime : datetime
        }
        console.log("Uatt",attendance);
        dispatch('update', { attendance: attendance})
    }

    const flatpickrOptions = {
        element: '#my-picker',
    }  

</script>
{#if $fields}
<div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">{$fields.attendance.form.editTitle}</h3>
                </div>
                <div class="card-body p-5">
                    <div class="form-group">
                    <Api url={urlEmpData} method="get" let:data let:loading let:error>
                            {#if data}
                                <EmployeeSelect employees={data} selectedEmployeeId={attendance.employeeId} on:changedEmployee={getChangedEmployeeId}></EmployeeSelect>
                            {/if}
                            </Api>
                    </div>
                    <div class="form-group">
                        <label for="desc">{$fields.attendance.attendance.recordeddate}:</label>
                        <Flatpickr id="flat" options="{ flatpickrOptions }" element="#my-picker" bind:value={attendance.recordedDateTime}> 
                            <div class="flatpickr" id="my-picker" data-date-format="d-m-Y">
                                <input type="text" id="recordeddate" class="form-control"  placeholder={$fields.attendance.placeholder.recordeddate} data-input>
                            </div>
                        </Flatpickr>
                        <br>
                    </div>
                    <div class="form-group">
                        <label for="appt">{$fields.attendance.attendance.recordedtime}:</label><br>
                        <Time {mhr} {mmin} bind:time></Time>
                    </div>
                    <div class="mt-4">
                        <button type="button" on:click={updateAttendance} class="btn btn-blue">{$fields.attendance.form.update}</button>
                        <a href="attendance" class="btn btn-outline-orange">{$fields.attendance.form.cancel}</a>     
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/if}
