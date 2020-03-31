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
    import { stores, goto } from '@sapper/app';
    import { Toast, Err } from '../../../util/salert';
    import { fields } from '../../../stores/attendance/store';
    import enFields from '../../../languages/en/attendance.json';
    import jpFields from'../../../languages/jp/attendance.json';
    const { session } = stores();
    $: $fields = $session.lan == 'en' ? enFields : jpFields;
    export let attendance;

    const updateAttendance = async(event) => {
        const url = $apiInfo.basePath + '/attendances/update';
        let attendance = event.detail.attendance;
        console.log("att",attendance);
        let result = await axiosPost(url, attendance);
        if(result.error == null){
            Toast.fire(
                'Success!',
                $fields.message.updateSuccess,
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