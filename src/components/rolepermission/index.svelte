<script>
    import { editRolePermission } from '../../stores/rolepermission/store.js';
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
    }
</script>
<style>
	
</style>
<section>
    <h2>Role Permission List</h2>
    <a class="btn btn-success" href='rolepermission/create' style="float:right;">Add New Role Permission</a>
    <div class="table-responsive" style="margin-top:60px;">
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