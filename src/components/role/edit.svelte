<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import { editRoleData } from '../../stores/role/store.js';

    export let role;

    const updateRole = () =>{
        dispatch('updateRole');
    };
</script>
<div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">Role Update Form</h3>
                </div>
                <div class="card-body p-5">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" bind:value={role.name} class="form-control" placeholder="Enter name" name="name">
                    </div>
                    <div class="form-group">
                        <label for="desc">Description:</label>
                        <textarea bind:value={role.description} class="form-control" placeholder="Enter description" name="desc"></textarea>
                    </div>
                    <div class="mt-4">
                        <button type="button" on:click={updateRole} class="btn btn-blue">Update</button>
                        <a href="role" class="btn btn-outline-orange">Cancel</a>     
                    </div>
                </div><!-- .card-body -->
            </div><!-- .card -->
        </div>
    </div>
</div>
