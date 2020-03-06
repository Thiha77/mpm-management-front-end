<script>
    import { onMount } from 'svelte';
    import RolePermissionEdit from '../../../components/rolepermission/edit.svelte';
    import { axiosGet, axiosPost} from '../../../util/api';
    import * as sapper from '@sapper/app';
    
    const roleUrl = "http://localhost:5000/roles";
	const permissionUrl = "http://localhost:5000/permissions";
	let roles;
    let permissions;
    
    onMount( async() => {
		axiosGet(roleUrl)
		.then((result) => {
			roles = result.data;
		});

		axiosGet(permissionUrl)
		.then((result) => {
			permissions = result.data;
		});
	});

	let updateRolePermission = (event) => {
		let data = event.detail.rolePermission;
		const url = "http://localhost:5000/rolepermissions/update";
		axiosPost(url,data).then( (data) => {
            if(data.error == null)
            {
               sapper.goto("../rolepermission");
            }else
            {
               
            }; 
        });
	};
</script>

<div class="container">
    {#if roles && permissions}
	    <RolePermissionEdit {roles} {permissions} on:update={updateRolePermission}></RolePermissionEdit>
    {/if}
</div>