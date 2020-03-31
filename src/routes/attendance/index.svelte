<script>
    import Api from '../../components/util/Api.svelte';
    import { axiosPost } from '../../util/api';
    import List from '../../components/attendance/list.svelte';
    import { attendanceMessages, attendance } from '../../stores/attendance/store';
    import { apiInfo } from '../../store.js';
    import { Toast, CfmDelete } from '../../util/salert';
    import { stores,goto } from '@sapper/app';
    import { fields } from '../../stores/attendance/store';
    import enFields from '../../languages/en/attendance.json';
    import jpFields from'../../languages/jp/attendance.json';
    let apiInstance;
    let url = $apiInfo.basePath + '/attendances';
    const method = 'get';
    const { session } = stores();
    $: $fields = $session.lan == 'en' ? enFields : jpFields;

    const deleteAttendance = async(event) => {
        let id = event.detail.id;
        CfmDelete.fire().then((result) => {
                if (result.value) {
                    del(id);
                }
            });
    }
     const del = async(id) => {
        const urlDel = $apiInfo.basePath + '/attendances/delete';
        let res = await axiosPost(urlDel, { id : id});
        if(res.data > 0){
            apiInstance.refresh();
            Toast.fire(
            'Deleted!',
            $fields.message.deleteSuccess,
            'success'
            );
        }
    }
    const editAttendance = (event) => {
        let id = event.detail.attendance.id;
        goto(`attendance/edit/${id}`);
    }
</script>

<div class="container">
{#if $session.lan && $fields}
    <!-- {#if $attendanceMessages.message}
        <h1>{$attendanceMessages.message}</h1>
    {/if} -->
    <Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
        {#if data}
            <List attendances={data} on:delete={deleteAttendance} on:edit={editAttendance} {fields}></List>
        {/if}
    </Api>
    {/if}
</div>
