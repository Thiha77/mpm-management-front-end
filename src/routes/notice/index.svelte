<script>
    import Api from '../../components/util/Api.svelte';
    import { axiosPost } from '../../util/api';
    import List from '../../components/notice/list.svelte';
    import { noticeMessages, notice } from '../../stores/notice/store';
    import { apiInfo } from '../../store.js';
    import { goto } from '@sapper/app';
    let url = $apiInfo.basePath + '/notices';
    const method = 'get';
    let apiInstance;
    
    const deleteNotice = async(event) => {
        let id = event.detail.id;
        if(confirm("Are you sure you want to delete?")){
            const urlDel = $apiInfo.basePath + '/notices/delete';
            let result = await axiosPost(urlDel, { id : id})
            apiInstance.refresh();
        }
    }

    const editNotice = (event) => {
        $notice = event.detail.notice;
        goto('notice/edit');
    }

</script>

<div class="container">
    {#if $noticeMessages.message}
        <h1>{$noticeMessages.message}</h1>
    {/if}
    <Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
        {#if data}
            <List notices={data} on:delete={deleteNotice} on:edit={editNotice}></List>
        {/if}
    </Api>
</div>

<style>
</style>