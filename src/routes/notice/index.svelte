<script>
    import Api from '../../components/util/Api.svelte';
    import PostApi from '../../util/api';
    import List from '../../components/notice/list.svelte';
    import { noticeMessages } from '../../stores/notice/store';
    const url = 'http://localhost:5000/notices';
    const method = 'get';

    const deleteNotice = (event) => {
    let id = event.detail.id;
        if(confirm("Are you sure you want to delete?")){
            const url = 'http://localhost:5000/notices/delete';
            PostApi(url, { id: id})
            .then( (result) => {
                (result.error) ? alert('Fail to delete') : alert(result.error); 
            });
        }
    }
</script>

<div class="container">
    {#if $noticeMessages.message}
        <h1>{$noticeMessages.message}</h1>
    {/if}
    <Api {url} {method} let:data let:loading let:error>
        {#if data}
            <List notices={data} on:delete={deleteNotice}></List>
        {/if}
    </Api>
</div>

<style>
</style>