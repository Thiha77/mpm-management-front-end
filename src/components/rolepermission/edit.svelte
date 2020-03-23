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
<div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">Role Form</h3>
                </div>
                <div class="card-body p-5">
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
                    <div class="mt-4">
                        <button type="button" on:click={edit} class="btn btn-primary">Update</button>
                        <a href="rolepermission" class="btn btn-outline-orange">Cancel</a>     
                    </div>
                </div><!-- .card-body -->
            </div><!-- .card -->
        </div>
    </div>
</div>