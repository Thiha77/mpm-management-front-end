<script>
    import { createEventDispatcher } from 'svelte';
    import { fields } from '../../store';
    const dispatch = createEventDispatcher();

    export let name;
    export let specialPermission;

    let savePermission = () => {
        dispatch('savePermission');
    }

    function resetPermission()
    {
       name = "";
       specialPermission = ""; 
    }
</script>
<div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">{$fields.permission.form.createTitle}</h3>
                </div>
                <div class="card-body p-5">
                     <div class="form-group">
                        <label for="name">{$fields.permission.permission.name}:</label>
                        <input type="text" bind:value={name} class="form-control" placeholder={$fields.permission.placeholder.name} name="name">
                    </div>
                    <div class="form-check">
                        <input type="checkbox" bind:checked={specialPermission} class="form-check-input">
                        <label class="form-check-label" for="exampleCheck1">{$fields.permission.permission.special}</label>
                    </div>
                    <div class="mt-4">
                        <!-- <a href="permission" class="btn btn-danger">{$fields.form.back}</a>   -->
                        <button type="button" on:click|preventDefault={savePermission} class="btn btn-primary">{$fields.permission.form.save}</button>
                        <button type="reset" class="btn btn-outline-orange" on:click={resetPermission}>{$fields.permission.form.cancel}</button>   
                    </div>
                </div><!-- .card-body -->
            </div><!-- .card -->
        </div>
    </div>
</div>
