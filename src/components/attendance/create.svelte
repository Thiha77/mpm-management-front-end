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

<section>
    <h2>Create New Attendance</h2>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <label for="title">Employee Id:</label>
                <input type="text" bind:value={attendance.employeeId} id="employeeid" class="form-control" placeholder="Enter title" />
            </div>
            <div class="form-group">
                <label for="desc">Recorded Date:</label>
                
                <Flatpickr id="flat" options="{ flatpickrOptions }" bind:value={attendance.recordedDateTime} element="#my-picker"> 
                    <div class="flatpickr" id="my-picker" data-date-format="d/m/Y">
                        <input type="text" placeholder="Select Date.." data-input >
                    </div>
                </Flatpickr>
                <br>
                <div class="form-group">
                <label for="appt">Recorded time:</label><br>
                <Time bind:time></Time>
                </div>
        </div> 
        <div class="card-footer">
            <button type="button" on:click={saveAttendance} class="btn btn-primary">Save</button>
        </div>
    </div> 
</section>

<style>
input {
  border: 2px solid whitesmoke;
  border-radius: 20px;
  padding: 12px 10px;
  text-align: center;
  width: 250px;
}
</style>