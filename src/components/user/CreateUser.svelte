<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    // export let name;
    // export let userName;
    // export let password;
    export let employees;
    let selectedEmp;

     let userData ={
        name:"",
        userName:"",
        password:"",
        selectedEmp:selectedEmp
    };

    const addUser = ()=> {
        dispatch("addUser",{userData:userData});
    };
</script>
<div class="container">
    <div class="row">
        <div class="col">
            <form>
                <div class="form-group">
                    <label for="title">Name</label>
                    <input class="form-control" bind:value={userData.name} required type="text" placeholder="Title" />
                </div>
                <div class="form-group">
                    <label for="title">User Name</label>
                    <input type="text" bind:value={userData.userName} class="form-control" placeholder="User Name" required/>
                </div>
                <div class="form-group">
                    <label for="title">Password</label>
                    <input type="password" bind:value={userData.password} class="form-control" placeholder="Password" required/>
                </div>
                <div class="form-group">
                    <label for="name">Employee Name:</label>
                    {#if employees}
                        <select class="form-control" bind:value={userData.selectedEmp}>
                            <option value="0">Please Select Employee</option>
                            {#each employees as employee}
                                <option value={employee.id}>{employee.name}</option>
                            {/each}
                        </select>
                    {/if}
                </div>
                <button type="submit" class="btn btn-primary" on:click|preventDefault={addUser}>Add User</button>     
            </form>
        </div>
    </div>
</div>