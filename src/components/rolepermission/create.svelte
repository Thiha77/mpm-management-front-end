<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import ApiGetRole from '../util/Api.svelte';
    import ApiGetPermission from '../util/Api.svelte';
    
    let selectedRole;
    let selectedPermission;
    function save()
    {
        // dispatchEvent('save');
        // alert('${selectedRole.id}');
    }
    let roles = [ {id: 1, name: 'admin'}, {id: 2, name: 'emp'}]
</script>
<style>
	
</style>
<section>
    <h2>Create New Role Permission</h2>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <label for="name">Role Name:</label>
                <ApiGetRole url = "http://localhost:5000/roles" method="get" let:data let:loading let:error>
                    {#if data}
                        <select class="form-control" bind:value={selectedRole} on:change="{ () => { console.log(selectedRole) }}">
                            {#each data as role}
                                <option value={role.id}>{role.name}</option>
                            {/each}
                        </select>
                    {/if}
	            </ApiGetRole>
            </div>
            <!-- <div class="form-group">
            <label for="desc">Permission Name:</label>
                <ApiGetPermission url = "http://localhost:5000/permissions" method="get" let:data let:loading let:error>
                    {#if data}
                        <select class="form-control" bind:value={selectedPermission}>
                            {#each data as permission}
                                <option value={permission.id} selected={selectedPermission === permission.id}>{permission.name}</option>
                            {/each}
                        </select>
                    {/if}
	            </ApiGetPermission>
            </div> -->
        </div> 
        <div class="card-footer">
            <button type="button" on:click{save} class="btn btn-primary">Save</button>
        </div>
    </div>
</section>