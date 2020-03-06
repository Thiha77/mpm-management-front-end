<script>    
    import EditUser from '../../../components/user/EditUser.svelte';
    import { apiInfo } from '../../../store.js';
    import { axiosPost }from '../../../util/api.js';
    import { user,userEdit } from '../../../stores/user/store.js';
    import { goto } from '@sapper/app';

    const editUserData = async() =>{
        let userEdit ={
            id: $userEdit.id,
            name: $userEdit.name,
            userName: $userEdit.userName,
            password: $userEdit.password,
            employeeId: $userEdit.employeeId
        };

        const url = $apiInfo.basePath + '/users/update';
        let result = await axiosPost(url, userEdit);
        if(result.error == null){
            $user = {
                message: 'Update Success',
                error: 'Error'
            }
            goto('../user');
        }else{
            $user = {
                    message: '',
                    error: result.error
                }
        }
        
    };
    
       
</script>
<!-- 
<Api url="http://localhost:5000/users" method="get" let:data let:loading let:error >
{#if data}
<UserList users={data}></UserList>
{/if}
</Api> -->
<EditUser on:update={editUserData}></EditUser>