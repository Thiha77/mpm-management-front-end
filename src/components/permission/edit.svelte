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
<div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">Permission Update Form</h3>
                </div>
                <div class="card-body p-5">
                    <div class="form-group">
                        <label for="name">Model/Form Name:</label>
                        <input type="text" bind:value={permission.name} class="form-control" placeholder="Enter name" name="name">
                    </div>
                    <div class="mt-4">
                        <button type="button" on:click={updatePermission} class="btn btn-blue">Update</button>
                        <a href="permission" class="btn btn-outline-orange">Cancel</a>     
                    </div>
                </div><!-- .card-body -->
            </div><!-- .card -->
        </div>
    </div>
</div>
        