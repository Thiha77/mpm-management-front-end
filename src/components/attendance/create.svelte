<script>
    import { createEventDispatcher } from 'svelte';
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
<div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">Attendance Form</h3>
                </div>
                <div class="card-body p-5">
                    <div class="form-group">
                        <label for="title">Employee Id:</label>
                        <input type="text" bind:value={attendance.employeeId} id="employeeid" class="form-control" placeholder="Enter title" />
                    </div>
                    <div class="form-group">
                        <label for="desc">Recorded Date:</label>
                        <Flatpickr id="flat" options="{ flatpickrOptions }" bind:value={attendance.recordedDateTime} element="#my-picker"> 
                            <div class="flatpickr" id="my-picker" data-date-format="d/m/Y">
                                <input type="text"  class="form-control enabled" placeholder="Select Date.." data-input >
                            </div>
                        </Flatpickr>
                    </div>
                    <div class="form-group">
                        <label for="appt">Recorded time:</label><br>
                        <Time bind:time></Time>
                    </div>
                    <div class="mt-4">
                        <button type="button" on:click={saveAttendance} class="btn btn-blue">Save</button>
                        <a href="attendance" class="btn btn-outline-orange">Cancel</a>     
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
