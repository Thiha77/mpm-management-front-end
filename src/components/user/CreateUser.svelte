<script>
    import { createEventDispatcher } from "svelte";
    import RoleSelect from '../role/roleSelect.svelte';
    const dispatch = createEventDispatcher();
    // export let name;
    // export let userName;
    // export let password;
    export let employees;
    export let roles;
    let selectedEmp;
    let selectedRoleId;
    const getChangedRoleId = (event) => {
        userData.roleId = event.detail.selectedRole;
        console.log(event.detail.selectedRole);
    };

    let userData ={
        name:"",
        userName:"",
        password:"",
        employeeId: null,
        roleId:null
    };
    const addUser = ()=> {
        dispatch("addUser", {userData: userData});
    };
</script>
<div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">User Register Form</h3>
                </div>
                <div class="card-body p-5">
                    <div class="">
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
                                    <select class="form-control" bind:value={userData.employeeId}>
                                        <option value="0">Please Select Employee</option>
                                        {#each employees as employee}
                                            <option value={employee.id}>{employee.name}</option>
                                        {/each}
                                    </select>
                                {/if}
                            </div>
                            <div class="form-group">
                                <RoleSelect {roles} on:changedRole={getChangedRoleId}></RoleSelect>
                            </div>
                            <div class="mt-4">
                                <button type="submit" class="btn btn-info" on:click|preventDefault={addUser}>Add User</button>
                                <a href="user" class="btn btn-outline-warning">Cancel</a>     
                            </div>
                        </form>
                    </div>
                </div><!-- .card-body -->
            </div><!-- .card -->
        </div>
    </div>
</div>