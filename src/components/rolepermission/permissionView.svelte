<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let enabledPermission;
    export let permissions;
    let selectedPermission;

    const changedPermission = selectedPermission => {
        dispatch("changedPermission",{selectedPermission:selectedPermission});
    };
</script>
<style>
	
</style>
<section>
    <label for="name">Permission Name:</label>
        <select class="form-control" disabled={enabledPermission == 0} bind:value={selectedPermission} on:change={(changedPermission(selectedPermission))}>
            <option value="0">Please Select Permission</option>
            {#if permissions}
                {#each permissions as permission}
                    <option value={permission.id}>{permission.name}</option>
                {/each}
            {/if}
        </select>
</section>