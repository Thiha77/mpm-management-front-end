<script>
    import { editRolePermission } from '../../stores/rolepermission/store.js';
    import RolePermissionSearch from './search.svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let rolePermissions;
    const destory = id => {
        dispatch('deleteRolePermission',{id:id});
    }

    const edit = (rolePermission) => {
        $editRolePermission = {
            id: rolePermission.id,
            roleId: rolePermission.roleId,
            permissionId: rolePermission.permissionId
        }
    };
    
    const searchRolePermission = (event) => {
        let search = event.detail.search;
        dispatch('searchRolePermissionData',{search});
    };
</script>
<style>
	
</style>
<section>
    <h2>Role Permission List</h2>
    <a class="btn btn-success" href='rolepermission/create' style="float:right;margin-bottom: 15px;">Add New Role Permission</a>
    <RolePermissionSearch on:searchRolePermission={searchRolePermission}></RolePermissionSearch>
    <div class="table-responsive" style="margin-top:30px;">
        <table class="table table-bordered">
            <thead>                                     
            <tr>
                <th>Id</th>
                <th>Role Name</th>
                <th>Permission Name</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {#if rolePermissions}
                    {#each rolePermissions as rolePermission}
                        <tr>
                            <td>{rolePermission.id}</td>
                            <td>{rolePermission.Role['name']}</td>
                            <td>{rolePermission.Permission['name']}</td>
                            <td>
                                <!-- <a href="rolepermission/edit" on:click={edit(rolePermission)} class="btn btn-info">Edit</a> -->
                                <button on:click={destory(rolePermission.id)} class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    {/each}
                {/if}
            </tbody>
        </table>
    </div>      
</section>