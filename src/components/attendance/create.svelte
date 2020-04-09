<script>
    import { createEventDispatcher } from 'svelte';
    import EmployeeSelect from '../employees/employeeSelect.svelte';
    import { fields } from '../../store';
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
        employeeId: null,
        recordedDateTime: ''
    }
    export let employees;
    const getChangedEmployeeId = (event) => {
        attendance.employeeId = event.detail.selectedEmployee;
        console.log(event.detail.selectedEmployee);
    };
    const saveAttendance = () => {
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
                        <h3 class="text-white text-uppercase text-center">{$fields.attendance.form.createTitle}</h3>
                    </div>
                    <div class="card-body p-5">
                        <div class="form-group">
                                    <EmployeeSelect {employees} on:changedEmployee={getChangedEmployeeId}></EmployeeSelect>
                        </div>
                        <div class="form-group">
                            <label for="desc">{$fields.attendance.attendance.recordeddate}:</label>
                            <Flatpickr id="flat" options="{ flatpickrOptions }" bind:value={attendance.recordedDateTime} element="#my-picker"> 
                                <div class="flatpickr" id="my-picker" data-date-format="d/m/Y">
                                    <input type="text"  class="form-control enabled" placeholder={$fields.attendance.placeholder.recordeddate} data-input >
                                </div>
                            </Flatpickr>
                        </div>
                        <div class="form-group">
                            <label for="appt">{$fields.attendance.attendance.recordedtime}:</label><br>
                            <Time bind:time></Time>
                        </div>
                        <div class="mt-4">
                            <button type="button" on:click={saveAttendance} class="btn btn-blue">{$fields.attendance.form.save}</button>
                            <a href="attendance" class="btn btn-outline-orange">{$fields.attendance.form.cancel}</a>     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}