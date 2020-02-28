<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let name;
    export let description;

    function saveRole()
    {
        dispatch('saveRole');
    }
</script>
<style>
	
</style>
<section>
    <h2>Create New Role</h2>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" bind:value={name} class="form-control" placeholder="Enter name" name="name">
            </div>
            <div class="form-group">
            <label for="desc">Description:</label>
            <input type="text" bind:value={description} class="form-control" placeholder="Enter description" name="desc">
            </div>
        </div> 
        <div class="card-footer">
            <button type="button" on:click={saveRole} class="btn btn-primary">Save</button>
        </div>
    </div>
</section>