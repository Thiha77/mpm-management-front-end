<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let name;
    export let specialPer;

    let savePermission = () => {
        dispatch('savePermission');
    };
</script>
<style>
	
</style>
<section>
    <h2>Create New Permission</h2>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <label for="name">Model/Form Name:</label>
                <input type="text" bind:value={name} class="form-control" placeholder="Enter name" name="name">
            </div>
            <div class="form-check">
                <input type="checkbox" bind:checked={specialPer} class="form-check-input">
                <label class="form-check-label" for="exampleCheck1">Special</label>
            </div>
        </div> 
        <div class="card-footer">
            <button type="button" on:click|preventDefault={savePermission} class="btn btn-primary">Save</button>
        </div>
    </div>
</section>