<script>
    import { createEventDispatcher } from 'svelte';
    import Flatpickr from 'svelte-flatpickr'
    import 'flatpickr/dist/flatpickr.css'
    import 'flatpickr/dist/themes/light.css'
    import Time from '../../components/util/Time.svelte';
    import moment from 'moment';
    export let attendance;

    let empid = attendance.employeeId;
    console.log("empid",empid);
     let rdatetime = attendance.recordedDateTime;
     console.log("rdatetime",rdatetime);
    let momenttime = moment.utc(rdatetime).toDate();
    console.log("momentTime",momenttime);
    attendance = {
        id : attendance.id,
        employeeId: attendance.employeeId,
        recordedDateTime: momenttime
    }
    let mhr = moment(rdatetime).format('HH');
    let mmin = moment(rdatetime).format('mm');

    let time ={
        selectedhr : mhr,
        selectedmin : mmin
    }
    const dispatch = createEventDispatcher();
    
    const updateAttendance = () => {
        if(attendance.employeeId == "" && document.getElementById("recordeddate").value == "")
        {
            alert("Please fill up employee Id and recorded date!");
            document.getElementById("employeeid").focus();
            document.getElementById("recordeddate").text = "";  
            return false;
                      
        }
        if(attendance.employeeId == "")
        {
            alert("Please fill up employee Id!");
            document.getElementById("employeeid").focus();
            return false;
        }
        if(document.getElementById("recordeddate").value == "")
        {
            alert("Please fill up recorded date!");
            document.getElementById("recordeddate").text = "";
            return false;
            
        }
        console.log("attendance.recordeddatetime",attendance.recordedDateTime);
        let date = moment(attendance.recordedDateTime).format('YYYY-MM-DD HH:mm:ss');
        let selectedhr = time.selectedhr.toString().length == 1 ? `0${time.selectedhr}` : time.selectedhr;
        let selectedmin = time.selectedmin.toString().length == 1 ? `0${time.selectedmin}` : time.selectedmin;
        let datetime = date.slice(0,10)+" "+selectedhr+":"+selectedmin+ ":00";
        console.log("datetime",datetime);
        attendance = {
            id : attendance.id,
            employeeId : attendance.employeeId,
            recordedDateTime : datetime
        }
        console.log("Uatt",attendance);
        if(empid != attendance.employeeId || rdatetime != attendance.recordedDateTime)
        {
        dispatch('update', { attendance: attendance})
        }
    }

    const flatpickrOptions = {
        element: '#my-picker',
    }  

</script>

<section>
    <h2>Edit Attendance</h2>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <label for="title">Employee Id:</label>
                <input type="text" bind:value={attendance.employeeId} id="employeeid" class="form-control" placeholder="Enter title" />
            </div>
            <div class="form-group">
                <label for="desc">Recorded Date:</label>
                <Flatpickr id="flat" options="{ flatpickrOptions }" element="#my-picker" bind:value={attendance.recordedDateTime}> 
                    <div class="flatpickr" id="my-picker" data-date-format="d-m-Y">
                        <input type="text" id="recordeddate" placeholder="Select Date.." data-input>
                    </div>
                </Flatpickr>
                <br>
            </div>
                <div class="form-group">
                <label for="appt">Recorded time:</label><br>
                    <Time {mhr} {mmin} bind:time></Time>
                </div>
                 <div>
            </div>
        </div> 
        <div class="card-footer">
            <button type="button" on:click={updateAttendance} class="btn btn-primary">Update</button>
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