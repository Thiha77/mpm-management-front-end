<script>
    import Api from '../../components/util/Api.svelte';
    import { axiosPost } from '../../util/api';
    import List from '../../components/notice/list.svelte';
    import Search from '../../components/notice/search.svelte';
    import { apiInfo, fields } from '../../store';
    import { stores, goto } from '@sapper/app';
    import Swal from 'sweetalert2';
    import { Toast, CfmDelete } from '../../util/salert';
    import NoAccess from '../../components/util/NoAccess.svelte';
    const { session } = stores();

    let url = $apiInfo.basePath + '/notices';
    const method = 'get';
    let apiInstance;
    
    const deleteNotice = async(event) => {
        let id = event.detail.id;
        CfmDelete.fire().then((result) => {
                if (result.value) {
                    del(id);
                }
            });

    }

    const del = async(id) => {
        const urlDel = $apiInfo.basePath + '/notices/delete';
        let res = await axiosPost(urlDel, { id : id});
        if(res.data > 0){
            apiInstance.refresh();
            Toast.fire(
            'Deleted!',
            'Notice has been deleted.',
            'success'
            );
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

<svelte:head>
    <title>Notice</title>
</svelte:head>

{#if $session.user && $session.user.permissions.notice && $session.user.permissions.notice != 'none'}
<section class="pr-2 pl-2">
    <div class="container-fluid">
    {#if $session.lan && $fields}
        <div class="row">
            <div class="col-md-8"></div>
            <div class="col-md-4"><Search on:search={search}></Search></div>
        </div>
        <Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
            {#if data}
                <List notices={data} on:delete={deleteNotice} on:edit={editNotice}></List>
            {/if}
        </Api>
    {/if}
    </div>
</section>
{:else}
<NoAccess></NoAccess>
{/if}