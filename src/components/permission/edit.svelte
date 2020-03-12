<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import { editPermissionData } from '../../stores/permission/store.js';
    export let permission;
    console.log(permission);
    let updatePermission = () => {
        dispatch('updatePermission');
    };
</script>
<style>
	
</style>
<section>
    <h2>Edit Permission</h2>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
            <label for="name">Model/Form Name:</label>
            <input type="text" bind:value={permission.name} class="form-control" placeholder="Enter name" name="name">
            </div>
        </div> 
        <div class="card-footer">
            <button type="button" on:click={updatePermission} class="btn btn-primary">Update</button>
        </div>
    </div>
</section>