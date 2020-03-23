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
<div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">Role Form</h3>
                </div>
                <div class="card-body p-5">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" bind:value={name} class="form-control" placeholder="Enter name" name="name">
                    </div>
                    <div class="form-group">
                        <label for="desc">Description:</label>
                        <textarea  bind:value={description} class="form-control" placeholder="Enter description" name="desc"></textarea>
                    </div>
                    <div class="mt-4">
                        <button type="submit" class="btn btn-blue" on:click={saveRole} >Save</button>
                        <a href="role" class="btn btn-outline-orange">Cancel</a>     
                    </div>
                </div><!-- .card-body -->
            </div><!-- .card -->
        </div>
    </div>
</div>