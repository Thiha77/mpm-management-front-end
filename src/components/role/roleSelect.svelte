<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let roles;
    let selectedRole;

    const changedRole = selectedRole => {
        dispatch("changedRole",{selectedRole:selectedRole});
    };
</script>
<style>
	
</style>
<section>
    <label for="name">Role Name:</label>
    {#if roles}
        <select class="form-control" bind:value={selectedRole} on:change={(changedRole(selectedRole))}>
            <option value="0">Please Select Role</option>
            {#each roles as role}
                <option value={role.id}>{role.name}</option>
            {/each}
        </select>
    {/if}
</section>