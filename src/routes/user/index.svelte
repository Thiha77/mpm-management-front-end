<script>    
    import Api from '../../components/util/Api.svelte';
    import ApiPost from '../../util/api.js';
    import UserList from '../../components/user/UserList.svelte';
    import { user} from '../../store.js';
    import axios from 'axios';
    const deleteUserData = (event) => {
        let data = {
            id: event.detail.id
        };
        if(confirm("Are you sure want to delete?"))
        {
            let url = "http://localhost:5000/users/delete";
            ApiPost(url,data);

        }
    };
</script>

<h1>{$user.createMessage}</h1>
<Api url="http://localhost:5000/users" method="get" let:data let:loading let:error >
    {#if data}
        <UserList users={data} on:deleteUser={deleteUserData}></UserList>
    {/if}
</Api>
