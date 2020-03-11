<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    import { userEdit } from '../../stores/user/store.js';
    
    export let employees;
    function updateUser(){
        dispatch('update');
    }
</script>
<div class="container">
    <div class="row">
        <div class="col">
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
                <!-- <div class="form-group">
                    <label for="title">Employee Id</label>
                    <input type="text" bind:value={$userEdit.employeeId} class="form-control" placeholder="Title" />
                </div> -->
                <div class="form-group">
                    <label for="name">Employee Name:</label>
                    {#if employees}
                        <select class="form-control" disabled>
                            <option value="0">Please Select Employee</option>
                            {#each employees as employee}
                                {#if employee.id === $userEdit.employeeId}
                                    <option value={employee.id} selected>{employee.name}</option>
                                {/if}
                            {/each}
                        </select>
                    {/if}
                </div>
                
                <button type="submit" class="btn btn-primary" on:click|preventDefault={updateUser}>Update</button>     
            </form>
        </div>
    </div>
</div>