<script>    
    import { onMount } from 'svelte';
    import Api from '../../../components/util/Api.svelte';
    import CreateUser from '../../../components/user/CreateUser.svelte';
    import { axiosGet,axiosPost } from '../../../util/api.js';
    import { user } from '../../../stores/user/store.js';
    import { stores, goto } from '@sapper/app';
    import { apiInfo } from '../../../store.js';
    import { Toast } from '../../../util/salert.js';
    import { validate } from '../../../util/validator';
    import ValidationBox from '../../../components/util/ValidationBox.svelte';
    let url = $apiInfo.basePath + '/users';
    let urlEmpData = $apiInfo.basePath + '/users/getEmpData';
    let urlRoleData = $apiInfo.basePath + '/roles/';
    const method = 'get';
    let roles;
    onMount( async() => {
		let roleResult = await axiosGet(urlRoleData);
		roles = roleResult.data;
    });
    let vErrors;
    let constraints = {
        userName: {
            presence: { allowEmpty: false }
        },
        password: {
            presence: { allowEmpty: false }
        },
        employeeId: {
            presence: { allowEmpty: false }
        },
        roleId: {
            presence: { allowEmpty: false }
        }
    };
    const addUserData = async(event) =>{
        // console.log(event.detail.userData.selectedRoleId);
        // let name = event.detail.userData.name;
        // let userName = event.detail.userData.userName;
        // let password = event.detail.userData.password;
        // let employeeId = event.detail.userData.selectedEmp;
        // let roleId = event.detail.userData.selectedRoleId;
        // console.log("roleId"+roleId);
        // let userData = {
        //     name:name,
        //     userName:userName,
        //     password:password,
        //     employeeId:employeeId,
        //     roleId:roleId
        // };
        // console.log(event.detail.userData);
        let users = event.detail.userData;
        vErrors = validate(users, constraints);
        if(vErrors){
            return;
        }  
        const url = $apiInfo.basePath + '/users/create';
        let result = await axiosPost(url, event.detail.userData);
        if(result.error == null){
             Toast.fire(
                'Success!',
                'New User is successfully created.',
                'success'
            )
            goto('../user');
        }else{
            $user = {
                message: '',
                error: result.error
            }
        }
    };
</script>

<div class="container">
    <div class="row">
        <div class="col-lg-9">
            <Api url={urlEmpData} {method} let:data let:loading let:error>
                {#if data}
                    <CreateUser {roles} employees={data} on:addUser={addUserData}></CreateUser>
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