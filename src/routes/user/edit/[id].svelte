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
    import { fields } from '../../../stores/user/store';
    import { axiosPost }from '../../../util/api.js';
    // import { userEdit } from '../../../stores/user/store.js';
    import { Toast } from '../../../util/salert.js';
    import { stores,goto } from '@sapper/app';
    import enFields from '../../../languages/en/user.json';
    import jpFields from'../../../languages/jp/user.json';
    export let user;
    let urlEmpData = $apiInfo.basePath + '/employees/'+user.employeeId;
    const method = 'get';
    const { session } = stores();
    $: $fields = $session.lan == 'en' ? enFields : jpFields;
    
    const editUserData = async() =>{
        let url = $apiInfo.basePath + '/users/update';
        let result = await axiosPost(url, user);
        if(result.error == null){
             Toast.fire(
                'Success!',
                'User is successfully updated.',
                'success'
            )
            goto('../user');
        }
    };
    
       
</script>

<Api url={urlEmpData} {method} let:data let:loading let:error>
{#if data}
    {#if $session.lan && $fields}
        <EditUser {user} employees={data} on:update={editUserData}  {$fields}></EditUser>
    {/if}
{/if}
</Api>