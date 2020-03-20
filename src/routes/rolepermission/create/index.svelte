<script>
	import { onMount } from 'svelte';
	import RolePermissionCreate from '../../../components/rolepermission/create.svelte';
	import { axiosGet, axiosPost} from '../../../util/api';
	import { stores, goto } from '@sapper/app';
	import { rolePermission } from '../../../stores/rolepermission/store';
	import { apiInfo } from '../../../store.js';
	import { Toast } from '../../../util/salert.js';
	import { validate } from '../../../util/validator';
    import ValidationBox from '../../../components/util/ValidationBox.svelte';
	
	const roleUrl =  $apiInfo.basePath + "/roles";
	const permissionUrl = $apiInfo.basePath + "/permissions";
	let roles;
	let permissions;

	let vErrors;
    let constraints = {
        roleId: {
            presence: { allowEmpty: false }
        },
        permissionId: {
            presence: { allowEmpty: false }
        }
    };

	onMount( async() => {
		let roleResult = await axiosGet(roleUrl);
		roles = roleResult.data;
	});

	let saveRolePermission = async(event) => {
		let data = event.detail.rolePermission;
		const url = $apiInfo.basePath + '/rolepermissions/create';

		vErrors = validate(data, constraints);
        if(vErrors){
            return;
        }  


        let result = await axiosPost(url, data);
        if(result.error == null){
            Toast.fire(
                'Success!',
                'New RolePermission is successfully created.',
                'success'
            )
            goto('../rolepermission');
        }else{
            $rolePermission = {
                    message: '',
                    error: result.error
                }
        }
	};

	let permissionByRoleId = async(event) => {
		let roleId = event.detail.selectedRole;
		const url = $apiInfo.basePath +"/permissions/byRoleId/"+roleId;
		let permissionResult = await axiosGet(url);
		permissions = permissionResult.data;
	};
</script>

{#if $rolePermission.error}
    <h1>{ $rolePermission.error }</h1>
{/if}
<div class="container">
	{#if vErrors}
        <ValidationBox {vErrors}></ValidationBox>
    {/if}
	{#if roles}
		<RolePermissionCreate {roles} {permissions} on:save={saveRolePermission} on:permissionByRoleId={permissionByRoleId}></RolePermissionCreate>
	{/if}
</div>