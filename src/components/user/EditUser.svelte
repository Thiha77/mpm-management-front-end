<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    import { userEdit } from '../../stores/user/store.js';
    
    function updateUser(){
        dispatch('update');
    }
</script>
<form>
    <div class="form-group">
        <label for="title">Name</label>
        <input class="form-control" bind:value={$userEdit.name} type="text">
    </div>
    <div class="form-group">
        <label for="title">User Name</label>
        <input type="text" bind:value={$userEdit.userName} class="form-control" placeholder="Title" />
    </div>
    <div class="form-group">
        <label for="title">Password</label>
        <input type="password" bind:value={$userEdit.password} class="form-control" placeholder="Title" />
    </div>
    <div class="form-group">
        <label for="title">Employee Id</label>
        <input type="text" bind:value={$userEdit.employeeId} class="form-control" placeholder="Title" />
    </div>
    <button type="submit" class="btn btn-primary" on:click|preventDefault={updateUser}>Update</button>     
</form>