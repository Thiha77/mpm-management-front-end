<script>    
    import EditUser from '../../../components/user/EditUser.svelte';
    import ApiPost from '../../../util/api.js';
    import { userEdit } from '../../../store.js';
    import * as sapper from '@sapper/app';

    
    const editUserData = () =>{
        let userEdit ={
            id: $userEdit.id,
            name: $userEdit.name,
            userName: $userEdit.userName,
            password: $userEdit.password,
            employeeId: $userEdit.employeeId
        };
        //console.log(userEdit);
        let url = "http://localhost:5000/users/update";
        ApiPost(url,userEdit).then( (data) => {
            if(data.error == null)
            {
                // alert("Update Sucess");
                sapper.goto("../user");
            }; 
        });
        
    };
    
       
</script>
<!-- 
<Api url="http://localhost:5000/users" method="get" let:data let:loading let:error >
{#if data}
<UserList users={data}></UserList>
{/if}
</Api> -->
<EditUser on:update={editUserData}></EditUser>