<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import { editRolePermission } from '../../stores/rolepermission/store.js';
    export let roles;
    export let permissions;
    let selectedRole;
    let selectedPermission;

    let edit = () => {
        let selectedData = {
            id: $editRolePermission.id,
            roleId : selectedRole,
            permissionId : selectedPermission
        };
        dispatch("update",{
            rolePermission: selectedData
        });
    }
</script>
<style>
	
</style>
<section>
    <h2>Edit New Role Permission</h2>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <label for="name">Role Name:</label>
                {#if roles}
                    <select class="form-control" bind:value={selectedRole}>
                        {#each roles as role}
                            {#if role.id == $editRolePermission.roleId}
                                <option value={role.id} selected>{role.name}</option>
                            {:else}
                                <option value={role.id}>{role.name}</option>
                            {/if}
                        {/each}
                    </select>
                {/if}
            </div>
            <div class="form-group">
                <label for="desc">Permission Name:</label>
                {#if permissions}
                    <select class="form-control" bind:value={selectedPermission}>
                        {#each permissions as permission}
                            {#if permission.id == $editRolePermission.permissionId}
                                <option value={permission.id} selected>{permission.name}</option>
                            {:else}
                                <option value={permission.id}>{permission.name}</option>
                            {/if}
                        {/each}
                    </select>
                {/if}
            </div>
        </div> 
        <div class="card-footer">
            <button type="button" on:click={edit} class="btn btn-primary">Update</button>
        </div>
    </div>
</section>