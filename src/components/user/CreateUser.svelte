<script>
    import { createEventDispatcher } from "svelte";
    import Api from '../../components/util/Api.svelte';
    const dispatch = createEventDispatcher();
    // export let name;
    // export let userName;
    // export let password;
    export let employees;
    // export let roles;
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
                    <input type="text" bind:value={userData.userName} required class="form-control" placeholder="User Name" />
                </div>
                <div class="form-group">
                    <label for="title">Password</label>
                    <input type="password" bind:value={userData.password} required class="form-control" placeholder="Password"/>
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
                <!-- <div class="form-group">
                    <label for="name">Role Name:</label>
                    {#if roles}
                        <select class="form-control">
                            <option value="0">Please Select Roles</option>
                            {#each roles as role}
                                <option value={role.id}>{role.name}</option>
                            {/each}
                        </select>
                    {/if}
                </div> -->
                <button type="submit" class="btn btn-primary" on:click|preventDefault={addUser}>Add User</button>
                <a href="employee" class="btn btn-outline-warning">Cancel</a>     
            </form>
        </div>
    </div>
</div>