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
    <div class="container">
        <div class="row">
            <div class="col">
                <RolePermissionSearch on:searchRolePermission={searchRolePermission}></RolePermissionSearch>
                <div class="table-responsive-sm ">
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-6"><h3 class="float-left">Role Permission List</h3></div>
                                <div class="col-sm-6"><a class="btn btn-info float-right" href='rolepermission/create'><i class="fas fa-plus-circle"></i> Add New Role Permission</a></div>
                            </div>
                        </div><!-- .table-title -->
                        <table class="table table-hover">
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
                                                <button on:click={destory(rolePermission.id)} class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                                            </td>
                                        </tr>
                                    {/each}
                                {/if}
                            </tbody>
                        </table><!-- .table-hover -->
                    </div><!-- .table-wrapper -->
                </div><!-- .table-responsive-sm -->
            </div>
        </div>
    </div>
</section>