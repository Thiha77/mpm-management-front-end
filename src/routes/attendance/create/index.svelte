<script>
    import CreateAttendance from '../../../components/attendance/create.svelte';
    import { axiosPost } from '../../../util/api';
    import { stores, goto } from '@sapper/app';
    import { attendanceMessages } from '../../../stores/attendance/store';
    import { apiInfo } from '../../../store.js';
    import { Toast, Err } from '../../../util/salert.js';
    import moment from 'moment';
    const { session } = stores();

    const saveAttendance = async(event) => {
        let attendance = event.detail.attendance;
        let time = event.detail.time;
        let empId = attendance.employeeId;
        let date = attendance.recordedDateTime;
        console.log("date", date);
        let selectedhr = time.selectedhr;
        let selectedmin = time.selectedmin.toString().length == 1 ? `0${time.selectedmin}` : time.selectedmin;
        console.log("selectedmin",selectedmin);
        let dateformatchange=moment(date).format('YYYY-MM-DD HH:mm:ss');
        console.log("dateformatchange",dateformatchange);
        let datetime = dateformatchange.slice(0,10)+" "+selectedhr+":"+selectedmin+ ":00";
        console.log("datetime",datetime);
        let att = {
            employeeId : empId,
            recordedDateTime : datetime
        }
        console.log("att",att);
        const url = $apiInfo.basePath + '/attendances/create';
        let result = await axiosPost(url, att);
        if(result.error == null){
            Toast.fire(
                'Success!',
                'New attendance is successfully created.',
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

{#if $attendanceMessages.error}
    <h1>{ $attendanceMessages.error }</h1>
{/if}
<CreateAttendance on:save={saveAttendance}></CreateAttendance>

<style>
</style>