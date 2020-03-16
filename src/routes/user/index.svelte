<script>    
    import Api from '../../components/util/Api.svelte';
    import { axiosPost } from '../../util/api';
    import UserList from '../../components/user/UserList.svelte';
    import { Toast, CfmDelete } from '../../util/salert';
    // import { user} from '../../store.js';
    import { apiInfo } from '../../store.js';
    import { goto } from '@sapper/app';
    let url = $apiInfo.basePath + '/users';
    import axios from 'axios';
    const method = 'get';
    let apiInstance;
    const deleteUserData = async(event) => {
        let id = event.detail.id;
        CfmDelete.fire().then((result) => {
                if (result.value) {
                    del(id);
                }
            });
        // if(confirm("Are you sure you want to delete?")){
        //     const urlDel = $apiInfo.basePath + '/users/delete';
        //     let result = await axiosPost(urlDel, { id : id})
        //     apiInstance.refresh();
        // }
    };
    const del = async(id) => {
        const urlDel = $apiInfo.basePath + '/users/delete';
        let result = await axiosPost(urlDel, { id : id});
        if(result.data > 0){
            apiInstance.refresh();
            Toast.fire(
            'Deleted!',
            'User has been deleted.',
            'success'
            );
        }
    }

    const editUser = (event) => {
        let id = event.detail.user.id;
        goto(`user/edit/${id}`);
    };
</script>
<svelte:head>
    <title>User</title>
</svelte:head>
<!-- <h1>{$user.createMessage}</h1> -->
<Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
    {#if data}
        <UserList users={data} on:deleteUser={deleteUserData} on:editUser={editUser}></UserList>
    {/if}
</Api>
