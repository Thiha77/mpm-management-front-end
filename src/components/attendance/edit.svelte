<script>
    import { createEventDispatcher } from 'svelte';
    import { fields } from '../../stores/attendance/store';
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
{#if $fields}
<div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">{$fields.form.editTitle}</h3>
                </div>
                <div class="card-body p-5">
                    <div class="form-group">
                        <label for="title">{$fields.attendance.employeeid}:</label>
                        <input type="text" bind:value={attendance.employeeId} id="employeeid" class="form-control" placeholder={$fields.placeholder.employeeid} />
                    </div>
                    <div class="form-group">
                        <label for="desc">{$fields.attendance.recordeddate}:</label>
                        <Flatpickr id="flat" options="{ flatpickrOptions }" element="#my-picker" bind:value={attendance.recordedDateTime}> 
                            <div class="flatpickr" id="my-picker" data-date-format="d-m-Y">
                                <input type="text" id="recordeddate" class="form-control"  placeholder={$fields.placeholder.recordeddate} data-input>
                            </div>
                        </Flatpickr>
                        <br>
                    </div>
                    <div class="form-group">
                        <label for="appt">{$fields.attendance.recordedtime}:</label><br>
                        <Time {mhr} {mmin} bind:time></Time>
                    </div>
                    <div class="mt-4">
                        <button type="button" on:click={updateAttendance} class="btn btn-blue">{$fields.form.update}</button>
                        <a href="attendance" class="btn btn-outline-orange">{$fields.form.cancel}</a>     
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/if}
<!-- 
<style>
input {
  border: 2px solid whitesmoke;
  border-radius: 20px;
  padding: 12px 10px;
  text-align: center;
  width: 250px;
}
</style> -->