<script context="module">
    import { axiosGet } from '../../../util/api';
    import config from '../../../config';
	export async function preload({ params }) {
        
        let id = params.id;
        let urlUserById = `${config.apiInfo.basePath}/users/${id}`;
        //console.log(urlUserById);
        let res = await axiosGet(urlUserById);
		if (res.data) {
			return { user: res.data };
		}else{
            this.error(404, 'Not Found!');
        }
	}
</script>
<script>   
    import Api from '../../../components/util/Api.svelte';
    import EditUser from '../../../components/user/EditUser.svelte';
    import { apiInfo } from '../../../store.js';
    import { axiosPost }from '../../../util/api.js';
    // import { userEdit } from '../../../stores/user/store.js';
    import { Toast } from '../../../util/salert.js';
    import { goto } from '@sapper/app';
    export let user;
    let urlEmpData = $apiInfo.basePath + '/employees/'+user.employeeId;
    const method = 'get';

    const editUserData = async() =>{
        let url = $apiInfo.basePath + '/users/update';
        let result = await axiosPost(url, user);
        if(result.error == null){
             Toast.fire(
                'Success!',
                'Update User is successfully updated.',
                'success'
            )
            goto('../user');
        }
    };
    
       
</script>

<Api url={urlEmpData} {method} let:data let:loading let:error>
{#if data}
   <EditUser {user} employees={data} on:update={editUserData}></EditUser>
{/if}
</Api>