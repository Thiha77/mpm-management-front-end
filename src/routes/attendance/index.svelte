<script>
    import Api from '../../components/util/Api.svelte';
    import { axiosPost } from '../../util/api';
    import List from '../../components/attendance/list.svelte';
    import Search from '../../components/attendance/search.svelte';
    import { attendanceMessages, attendance } from '../../stores/attendance/store';
    import { apiInfo, fields } from '../../store.js';
    import { Toast, CfmDelete } from '../../util/salert';
    import { stores,goto } from '@sapper/app';
    let apiInstance;
    let url = $apiInfo.basePath + '/attendances';
    const method = 'get';
    const { session } = stores();
    
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
            $fields.attendance.message.deleteSuccess,
            'success'
            );
        }
    }
    const editAttendance = (event) => {
        let id = event.detail.attendance.id;
        goto(`attendance/edit/${id}`);
    }
    const search = async(event) => {
        let textSearch = event.detail.textSearch;
        let exUrl = (textSearch)? $apiInfo.basePath + '/attendances/search/' + textSearch : $apiInfo.basePath + '/attendances';
        // console.log(url);
        apiInstance.loadExternal(exUrl);
        console.log('refreshed');
    }
</script>
<svelte:head><title>Attendance</title></svelte:head>
<section class="pr-2 pl-2">
<div class="container">
{#if $session.lan && $fields}
    <Search on:search={search}></Search>
    <Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
        {#if data}
            <List attendances={data} on:delete={deleteAttendance} on:edit={editAttendance}></List>
        {/if}
    </Api>
{/if}
</div>
</section>