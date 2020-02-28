<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import { editRoleData } from '../../stores/role/store.js';

    const updateRole = () =>{
        dispatch('updateRole');
    };
</script>
<style>
	
</style>
<section>
    <h2>Edit New Role</h2>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" bind:value={$editRoleData.name} class="form-control" placeholder="Enter name" name="name">
            </div>
            <div class="form-group">
            <label for="desc">Description:</label>
            <input type="text" bind:value={$editRoleData.description} class="form-control" placeholder="Enter description" name="desc">
            </div>
        </div> 
        <div class="card-footer">
            <button type="button" on:click={updateRole} class="btn btn-primary">Update</button>
        </div>
    </div>
</section>