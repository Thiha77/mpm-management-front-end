<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import RoleSelect from '../role/roleSelect.svelte';
    import PermissionSelect from '../permission/permissionSelect.svelte';
    export let roles;
    export let permissions;

    let selectedRole = 0;
    let selectedPermission = 0;

    let enabledPermission = 0;
    let changedRole = (event) => {
        enabledPermission = event.detail.selectedRole;
        selectedRole = event.detail.selectedRole; 
        dispatch('permissionByRoleId',{selectedRole:selectedRole});
    };

    let changedPermission = (event) => {
        selectedPermission = event.detail.selectedPermission;
    };

    const save = () => {
        let selectedData = {
        roleId : selectedRole,
        permissionId : selectedPermission
        };
        dispatch("save",{
            rolePermission: selectedData
        });
    }
</script>
<style>
	
</style>
<div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">Role Form</h3>
                </div>
                <div class="card-body p-5">
                    <div class="form-group">
                        {#if roles}
                            <RoleSelect {roles} on:changedRole={changedRole}></RoleSelect>
                        {/if}
                    </div>
                    <div class="form-group">
                        <PermissionSelect {permissions} {enabledPermission} on:changedPermission={changedPermission}></PermissionSelect> 
                    </div>
                    <div class="mt-4">
                         {#if selectedRole == 0 || selectedPermission == 0}
                            <button type="button" on:click={save} class="btn btn-primary" disabled>Save</button>
                        {:else}
                            <button type="button" on:click={save} class="btn btn-primary">Save</button>
                        {/if}
                        <a href="rolepermission" class="btn btn-outline-orange">Cancel</a>     
                    </div>
                </div><!-- .card-body -->
            </div><!-- .card -->
        </div>
    </div>
</div>