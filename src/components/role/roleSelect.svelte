<script>
    import { createEventDispatcher } from 'svelte';
    import { fields } from '../../store';

    const dispatch = createEventDispatcher();
    export let roles;
    export let selectedRoleId;

    const changedRole = selectedRoleId => {
        dispatch("changedRole",{selectedRole:selectedRoleId});
    }
</script>
<style>
	
</style>
    <label for="name">{$fields.role.form.roleName}:</label>
    <div class="mpm-require">
        {#if roles}
            <select class="form-control" bind:value={selectedRoleId} on:change={(changedRole(selectedRoleId))}>
                <option value="0">{$fields.role.form.selectRole}</option>
                {#each roles as role}
                    <option value={role.id}>{role.name}</option>
                {/each}
            </select>
        {/if}
        <i class="fas fa-star-of-life req-icon"></i>
    </div>