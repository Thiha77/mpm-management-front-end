<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let name;
    export let userName;
    export let password;
    export let employeeId;
     let addUser = () => {
        dispatch('addUser');
    };
</script>
<form>
    <div class="form-group">
        <label for="title">Name</label>
        <input class="form-control" bind:value={name} type="text">
    </div>
    <div class="form-group">
        <label for="title">User Name</label>
        <input type="text" bind:value={userName} class="form-control" placeholder="Title" />
    </div>
    <div class="form-group">
        <label for="title">Password</label>
        <input type="password" bind:value={password} class="form-control" placeholder="Title" />
    </div>
    <div class="form-group">
        <label for="title">Employee Id</label>
        <input type="text" bind:value={employeeId} class="form-control" placeholder="Title" />
    </div>
    <button type="submit" class="btn btn-primary" on:click|preventDefault={addUser}>Add User</button>     
</form>