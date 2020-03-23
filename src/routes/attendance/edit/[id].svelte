<script context="module">
    import { axiosGet } from '../../../util/api';
    import config from '../../../config';
	export async function preload({ params }) {
        
        let id = params.id;
        let urlAttendanceById = `${config.apiInfo.basePath}/attendances/${id}`;
        let res = await axiosGet(urlAttendanceById);
        console.log("res",res);
		if (res.data) {
			return { attendance: res.data };
		}else{
            this.error(404, 'Not Found!');
        }
	}
</script>
<script>
    import EditAttendance from '../../../components/attendance/edit.svelte';
    import { attendanceMessages } from '../../../stores/attendance/store';
    import { apiInfo } from '../../../store.js';
    import { axiosPost }from '../../../util/api.js';
    import { goto } from '@sapper/app';
    import { Toast, Err } from '../../../util/salert';
    export let attendance;

    const updateAttendance = async(event) => {
        const url = $apiInfo.basePath + '/attendances/update';
        let attendance = event.detail.attendance;
        console.log("att",attendance);
        let result = await axiosPost(url, attendance);
        if(result.error == null){
            Toast.fire(
                'Success!',
                'Attendance is successfully updated.',
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

{#if attendance}
<EditAttendance {attendance} on:update={updateAttendance}></EditAttendance>
{/if}
<style></style>