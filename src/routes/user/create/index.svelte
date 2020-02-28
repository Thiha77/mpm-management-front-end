<script>    
    import CreateUser from '../../../components/user/CreateUser.svelte';
    import ApiPost from '../../../util/api.js';
    import { user } from '../../../stores/user/store.js';
    import * as sapper from '@sapper/app';

    let userData ={
        name:"",
        userName:"",
        password:"",
        employeeId:""
    };

    const addUserData = () =>{
        let url = "http://localhost:5000/users/create";
        ApiPost(url,userData).then( (data) => {
            if(data.error == null)
            {
                $user = {
                    createError: "",
                    createMessage: "Success"
                };
                sapper.goto("../user");
            }else
            {
                $user = {
                    createError: "Fail",
                    createMessage: ""
                };
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
<CreateUser on:addUser={addUserData} bind:name={userData.name} bind:userName={userData.userName} bind:password={userData.password} bind:employeeId={userData.employeeId}></CreateUser>
