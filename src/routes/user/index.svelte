<script>    
    import Api from '../../components/util/Api.svelte';
    import { axiosPost } from '../../util/api';
    import UserList from '../../components/user/UserList.svelte';
    import { user} from '../../store.js';
    import { apiInfo } from '../../store.js';
    import { goto } from '@sapper/app';
    let url = $apiInfo.basePath + '/users';
    import axios from 'axios';
    const method = 'get';
    let apiInstance;
    const deleteUserData = async(event) => {
        let id = event.detail.id;
        if(confirm("Are you sure you want to delete?")){
            const urlDel = $apiInfo.basePath + '/users/delete';
            let result = await axiosPost(urlDel, { id : id})
            apiInstance.refresh();
        }
    };
</script>

<h1>{$user.createMessage}</h1>
<Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
    {#if data}
        <UserList users={data} on:deleteUser={deleteUserData}></UserList>
    {/if}
</Api>
