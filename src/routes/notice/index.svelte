<script>
    import Api from '../../components/util/Api.svelte';
    import { axiosPost } from '../../util/api';
    import List from '../../components/notice/list.svelte';
    import Search from '../../components/notice/search.svelte';
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
            let result = await axiosPost(urlDel, { id : id});
            apiInstance.refresh();
        }
    }

    const editNotice = (event) => {
        // $notice = event.detail.notice;
        let id = event.detail.notice.id;
        goto(`notice/edit/${id}`);
    }

    const search = async(event) => {
        let textSearch = event.detail.textSearch;
        let exUrl = (textSearch)? $apiInfo.basePath + '/notices/search/' + textSearch : $apiInfo.basePath + '/notices';
        // console.log(url);
        apiInstance.loadExternal(exUrl);
        console.log('refreshed');
    }

</script>
<svelte:head><title>Notice</title></svelte:head>
<div class="container">
    {#if $noticeMessages.message}
        <h1>{$noticeMessages.message}</h1>
    {/if}
    <Search on:search={search}></Search>
    <Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
        {#if data}
            <List notices={data} on:delete={deleteNotice} on:edit={editNotice}></List>
        {/if}
    </Api>
</div>

<style>
</style>