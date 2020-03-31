<script>
    import CreateAttendance from '../../../components/attendance/create.svelte';
    import { axiosPost } from '../../../util/api';
    import { stores, goto } from '@sapper/app';
    import { attendanceMessages, fields } from '../../../stores/attendance/store';
    import { apiInfo } from '../../../store.js';
    import { Toast, Err } from '../../../util/salert.js';
    import enFields from '../../../languages/en/attendance.json';
    import jpFields from'../../../languages/jp/attendance.json';
    import moment from 'moment';
    const { session } = stores();
    $: $fields = $session.lan == 'en' ? enFields : jpFields;

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
                $fields.message.saveSuccess,
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
            <CreateAttendance on:save={saveAttendance} {fields}></CreateAttendance>
            {/if}
        </div>
    </div>
</div>
