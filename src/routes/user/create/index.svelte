<script>    
    import Api from '../../../components/util/Api.svelte';
    import CreateUser from '../../../components/user/CreateUser.svelte';
    import { axiosPost } from '../../../util/api.js';
    import { user } from '../../../stores/user/store.js';
    import { stores, goto } from '@sapper/app';
    import { apiInfo } from '../../../store.js';
    let url = $apiInfo.basePath + '/users';
    let urlEmpData = $apiInfo.basePath + '/users/getEmpData';
    const method = 'get';

    const addUserData = async(event) =>{
        let name = event.detail.userData.name;
        let userName = event.detail.userData.userName;
        let password = event.detail.userData.password;
        let employeeId = event.detail.userData.selectedEmp;
        let userData = {
            name:name,
            userName:userName,
            password:password,
            employeeId:employeeId
        };
        const url = $apiInfo.basePath + '/users/create';
        let result = await axiosPost(url, userData);
        if(result.error == null){
            $user = {
                message: 'Create Success',
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
<Api url={urlEmpData} {method} let:data let:loading let:error>
{#if data}
    <CreateUser employees={data} on:addUser={addUserData}></CreateUser>
{/if}
</Api>
