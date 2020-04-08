<script>
    import { onMount } from 'svelte';
    import CreateAttendance from '../../../components/attendance/create.svelte';
    import { axiosGet,axiosPost } from '../../../util/api';
    import { stores, goto } from '@sapper/app';
    import { attendanceMessages } from '../../../stores/attendance/store';
    import { apiInfo,fields } from '../../../store.js';
    import { Toast, Err } from '../../../util/salert.js';
    import { validate } from '../../../util/validator';
    import ValidationBox from '../../../components/util/ValidationBox.svelte';
    import moment from 'moment';
    let urlEmpData = $apiInfo.basePath + '/employees';
    let employees;
    onMount( async() => {
		let employeeResult = await axiosGet(urlEmpData);
        employees = employeeResult.data;
        console.log("employees",employees);
    });
    const { session } = stores();
    let vErrors;
    
    let constraints = {
        employeeId: {
            presence: { allowEmpty: false }
        },
        recordedDateTime: {
            datetime: true
        }
    };
    const saveAttendance = async(event) => {
        let attendance = event.detail.attendance;
        let time = event.detail.time;
        let empId = attendance.employeeId;
        let date = attendance.recordedDateTime;
        console.log("date", date);
        let selectedhr = time.selectedhr;
        let selectedmin = time.selectedmin.toString().length == 1 ? `0${time.selectedmin}` : time.selectedmin;
        console.log("selectedmin",selectedmin);
        let datetime;
        if(date.length != 0)
        {
        let dateformatchange=moment(date).format('YYYY-MM-DD HH:mm:ss');
        console.log("dateformatchange",dateformatchange);
            datetime = dateformatchange.slice(0,10)+" "+selectedhr+":"+selectedmin+ ":00";
        console.log("datetime",datetime);
        }
        else{
            datetime = "";
        }
        if(empId == 0)
        {
            empId = null;
        }
        let att = {
            employeeId : empId,
            recordedDateTime : datetime
        }
        console.log("att",att);
         vErrors = validate(att, constraints);
        if(vErrors){
            return;
        }  
        const url = $apiInfo.basePath + '/attendances/create';
        let result = await axiosPost(url, att);
        if(result.error == null){
            Toast.fire(
                'Success!',
                $fields.attendance.message.saveSuccess,
                'success'
            )
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
            {#if $session.lan && $fields}
            <CreateAttendance {employees} on:save={saveAttendance} {fields}></CreateAttendance>
            {/if}
        </div>
        <div class="col-lg-3" >
            {#if vErrors}
                <ValidationBox {vErrors}></ValidationBox>
            {/if}
        </div>
    </div>
</div>
