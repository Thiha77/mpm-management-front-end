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
    import { validate } from '../../../util/validator';
    import ValidationBox from '../../../components/util/ValidationBox.svelte';
    import { stores,goto } from '@sapper/app';
    import enFields from '../../../languages/en/user.json';
    import jpFields from'../../../languages/jp/user.json';
    export let user;
    let urlEmpData = $apiInfo.basePath + '/employees/'+user.employeeId;
    const method = 'get';
    const { session } = stores();
    $: $fields = $session.lan == 'en' ? enFields : jpFields;
    let vErrors;
    let constraints = {
        userName: {
            presence: { allowEmpty: false }
        },
        password: {
            presence: { allowEmpty: false },
            length:{
                minimum:8,
                message:"must be at least 8 characters"
            }
        },
        roleId: {
            presence: { allowEmpty: false }
        }
    };
    const editUserData = async() =>{
        let url = $apiInfo.basePath + '/users/update';
        vErrors = validate(user, constraints);
        if(vErrors){
            return;
        } 
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
<div class="container">
    <div class="row">
        <div class="col-lg-9">
            <Api url={urlEmpData} {method} let:data let:loading let:error>
            {#if data}
                {#if $session.lan && $fields}
                    <EditUser {user} employees={data} on:update={editUserData}  {$fields}></EditUser>
                {/if}
            {/if}
            </Api>
        </div>
        <div class="col-lg-3" >
            {#if vErrors}
                <ValidationBox {vErrors}></ValidationBox>
            {/if}
        </div>
    </div>
</div>