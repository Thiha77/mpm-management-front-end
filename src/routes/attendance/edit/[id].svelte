<script context="module">
    import { axiosGet } from '../../../util/api';
    import config from '../../../config';
    import moment from 'moment';
	export async function preload({ params }) {
       
        let id = params.id;
        let urlAttendanceById = `${config.apiInfo.basePath}/attendances/${id}`;
        let res = await axiosGet(urlAttendanceById);
        console.log("res",res);
         let rdatetime = res.data.recordedDateTime;
        console.log("idrdatetime",rdatetime);
        let momenttime = moment(rdatetime).toDate();
        console.log("idmomentTime",momenttime);
		if (res.data) {
            return { 
                attendance : {
                    id : res.data.id,
                    employeeId: res.data.employeeId,
                    recordedDateTime: momenttime
                }
            };
            console.log("resattendance",attendance);
		}else{
            this.error(404, 'Not Found!');
        }
    }
</script>
<script>
    import EditAttendance from '../../../components/attendance/edit.svelte';
    import { attendanceMessages } from '../../../stores/attendance/store';
    import { apiInfo,fields } from '../../../store.js';
    import { axiosPost }from '../../../util/api.js';
    import { goto } from '@sapper/app';
    import { Toast, Err } from '../../../util/salert';
    import { validate } from '../../../util/validator';
    import ValidationBox from '../../../components/util/ValidationBox.svelte';
    export let attendance;
    let vErrors;
    let constraints = {
        employeeId: {
            presence: { allowEmpty: false }
        },
        recordedDateTime: {
            datetime: true
        }
    };
    const updateAttendance = async(event) => {
        const url = $apiInfo.basePath + '/attendances/update';
        let attendance = event.detail.attendance;
        let time = event.detail.time;
         console.log("attendance.recordeddatetime",attendance.recordedDateTime);
        let datetime;
        if(attendance.recordedDateTime.length != 0)
        {
        let date = moment(attendance.recordedDateTime).format('YYYY-MM-DD HH:mm:ss');
        let selectedhr = time.selectedhr.toString().length == 1 ? `0${time.selectedhr}` : time.selectedhr;
        let selectedmin = time.selectedmin.toString().length == 1 ? `0${time.selectedmin}` : time.selectedmin;
        datetime = date.slice(0,10)+" "+selectedhr+":"+selectedmin+ ":00";
        datetime = moment(datetime).toDate();
        console.log("datetime",datetime);
        }
        else{
            datetime = "";
        }
        if(attendance.employeeId == 0)
        {
            attendance.employeeId = null;
        }
        attendance = {
            id : attendance.id,
            employeeId : attendance.employeeId,
            recordedDateTime : datetime
        }
        console.log("Uatt",attendance);
        // console.log("att",attendance); 
        // console.log("empid",attendance.employeeId);
        // console.log("recorddate",attendance.recordedDateTime);
        // if(attendance.recordedDateTime != ""){
        //     attendance.recordedDateTime;
        // }
        // else{
        //     attendance.recordedDateTime = ""
        // }
        // if(attendance.employeeId == 0){
        //     attendance.employeeId = null;
        // }
        vErrors = validate(attendance, constraints);
        if(vErrors){
            return;
        }  
        let result = await axiosPost(url, attendance);
        if(result.error == null){
            Toast.fire(
                'Success!',
                $fields.attendance.message.updateSuccess,
                'success'
            );
            goto('../attendance');
        }else{
            $attendanceMessages = {
                    message: '',
                    error: result.error
                }
        }
    }
</script>
<div class="container">
    <div class="row">
        <div class="col-lg-9">
            {#if attendance}
            <EditAttendance {attendance} on:update={updateAttendance}></EditAttendance>
            {/if}
  </div>
    <div class="col-lg-3" >
            {#if vErrors}
                <ValidationBox {vErrors}></ValidationBox>
            {/if}
    </div>  
    </div>
</div>
<style></style>