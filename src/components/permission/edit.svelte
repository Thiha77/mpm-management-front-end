<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import { editPermissionData } from '../../stores/permission/store.js';

    export let fields;
    export let permission;
    
    let updatePermission = () => {
        dispatch('updatePermission');
    }

    function resetPermission()
    {
        permission.name = "";
    }
</script>
<style>
	
</style>
<div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">{fields.form.updateTitle}</h3>
                </div>
                <div class="card-body p-5">
                    <div class="form-group">
                        <label for="name">{fields.permission.name}:</label>
                        <input type="text" bind:value={permission.name} class="form-control" placeholder={fields.placeholder.name} name="name">
                    </div>
                    <div class="mt-4">
                        <a href="permission" class="btn btn-danger">{fields.form.back}</a>  
                        <button type="button" on:click={updatePermission} class="btn btn-blue">{fields.form.update}</button>
                        <button type="reset" class="btn btn-outline-orange" on:click={resetPermission}>{fields.form.cancel}</button>      
                    </div>
                </div><!-- .card-body -->
            </div><!-- .card -->
        </div>
    </div>
</div>
        