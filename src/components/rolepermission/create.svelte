<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import RoleSelect from '../role/roleSelect.svelte';
    import PermissionSelect from '../permission/permissionSelect.svelte';
    export let roles;
    export let permissions;

    let selectedRole;
    let selectedPermission;
    
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
<section>
    <h2>Create New Role Permission</h2>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                {#if roles}
                    <RoleSelect {roles} on:changedRole={changedRole}></RoleSelect>
                {/if}
            </div>
            <div class="form-group">
                <PermissionSelect {permissions} {enabledPermission} on:changedPermission={changedPermission}></PermissionSelect> 
            </div>
        </div> 
        <div class="card-footer">
            <button type="button" on:click={save} class="btn btn-primary">Save</button>
        </div>
    </div>
</section>