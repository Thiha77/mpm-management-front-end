<script>
	import { onMount } from 'svelte';
	import RolePermissionCreate from '../../../components/rolepermission/create.svelte';
	import { axiosGet, axiosPost} from '../../../util/api';
	import * as sapper from '@sapper/app';

	const roleUrl = "http://localhost:5000/roles";
	const permissionUrl = "http://localhost:5000/permissions";
	let roles;
	let permissions;

	onMount( async() => {
		let roleResult = await axiosGet(roleUrl);
		roles = roleResult.data;
	});

	let saveRolePermission = (event) => {
		console.log(event.detail.rolePermission);
		let data = event.detail.rolePermission;
		const url = "http://localhost:5000/rolepermissions/create";
		axiosPost(url,data).then( (data) => {
            if(data.error == null)
            {
               sapper.goto("../rolepermission");
            }else
            {
               
            }; 
        });
	};

	let permissionByRoleId = async(event) => {
		let roleId = event.detail.selectedRole;
		const url = "http://localhost:5000/permissions/byRoleId/"+roleId;
		let permissionResult = await axiosGet(url);
		permissions = permissionResult.data;
	};
</script>

<div class="container">
	{#if roles}
		<RolePermissionCreate {roles} {permissions} on:save={saveRolePermission} on:permissionByRoleId={permissionByRoleId}></RolePermissionCreate>
	{/if}
</div>