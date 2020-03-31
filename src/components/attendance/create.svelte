<script>
    import { createEventDispatcher } from 'svelte';
    import { fields } from '../../stores/attendance/store';
    import Flatpickr from 'svelte-flatpickr'
    import 'flatpickr/dist/flatpickr.css'
    import 'flatpickr/dist/themes/light.css'
    import Time from '../../components/util/Time.svelte';
    const dispatch = createEventDispatcher();
    let time ={
        selectedhr : '1',
        selectedmin : '0'
    }

    let attendance = {
        employeeId: '',
        recordedDateTime: ''
    }
    const saveAttendance = () => {
        if(attendance.employeeId == "" && attendance.recordedDateTime == "")
        {
            alert("Please fill up employee Id and recorded date!");
            document.getElementById("employeeid").focus();
            return false;
            
        }
        if(attendance.employeeId == "")
        {
            alert("Please fill up employee Id!");
            document.getElementById("employeeid").focus();
            return false;
        }
        if(attendance.recordedDateTime == "")
        {
            alert("Please fill up recorded date!");
            return false;
        }
        dispatch('save', { attendance: attendance, time : time})
    }
    let date = null
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
                    <h3 class="text-white text-uppercase text-center">{$fields.form.createTitle}</h3>
                </div>
                <div class="card-body p-5">
                    <div class="form-group">
                        <label for="title">{$fields.attendance.employeeid}:</label>
                        <input type="text" bind:value={attendance.employeeId} id="employeeid" class="form-control" placeholder={$fields.placeholder.employeeid} />
                    </div>
                    <div class="form-group">
                        <label for="desc">{$fields.attendance.recordeddate}:</label>
                        <Flatpickr id="flat" options="{ flatpickrOptions }" bind:value={attendance.recordedDateTime} element="#my-picker"> 
                            <div class="flatpickr" id="my-picker" data-date-format="d/m/Y">
                                <input type="text"  class="form-control enabled" placeholder={$fields.placeholder.recordeddate} data-input >
                            </div>
                        </Flatpickr>
                    </div>
                    <div class="form-group">
                        <label for="appt">{$fields.attendance.recordedtime}:</label><br>
                        <Time bind:time></Time>
                    </div>
                    <div class="mt-4">
                        <button type="button" on:click={saveAttendance} class="btn btn-blue">{$fields.form.save}</button>
                        <a href="attendance" class="btn btn-outline-orange">{$fields.form.cancel}</a>     
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/if}