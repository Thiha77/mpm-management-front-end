<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let name;
    export let specialPer;

    let savePermission = () => {
        dispatch('savePermission');
    };
</script>
<div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">Permission Form</h3>
                </div>
                <div class="card-body p-5">
                     <div class="form-group">
                        <label for="name">Model/Form Name:</label>
                        <input type="text" bind:value={name} class="form-control" placeholder="Enter name" name="name">
                    </div>
                    <div class="form-check">
                        <input type="checkbox" bind:checked={specialPer} class="form-check-input">
                        <label class="form-check-label" for="exampleCheck1">Special</label>
                    </div>
                    <div class="mt-4">
                        <button type="button" on:click|preventDefault={savePermission} class="btn btn-primary">Save</button>
                        <a href="permission" class="btn btn-outline-orange">Cancel</a>     
                    </div>
                </div><!-- .card-body -->
            </div><!-- .card -->
        </div>
    </div>
</div>
