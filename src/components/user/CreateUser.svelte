<script>
    import { createEventDispatcher } from "svelte";
    import RoleSelect from '../role/roleSelect.svelte';
    import { fields } from '../../store';
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
<div class="container-fluid">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">{$fields.user.form.title}</h3>
                </div>
                <div class="card-body p-5">
                    <div class="">
                        <form>
                            <div class="form-group">
                                <label for="title">{$fields.user.user.name}</label>
                                <input class="form-control" bind:value={userData.name}  type="text" placeholder={$fields.user.user.name} />
                            </div>
                            <div class="form-group">
                                <label for="title">{$fields.user.user.userName}</label>
                                <div class="mpm-require">
                                    <input type="text" bind:value={userData.userName}  class="form-control" placeholder={$fields.user.user.userName}  />
                                    <i class="fas fa-star-of-life req-icon"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="title">{$fields.user.user.password}</label>
                                <div class="mpm-require">
                                    <input type="password" bind:value={userData.password} class="form-control" placeholder={$fields.user.user.password} />
                                    <i class="fas fa-star-of-life req-icon"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="name">{$fields.user.user.empName}</label>
                                <div class="mpm-require">
                                    {#if employees}
                                        <select class="form-control" bind:value={userData.employeeId}>
                                            <option value="0">{$fields.user.option.selectName}</option>
                                            {#each employees as employee}
                                                <option value={employee.id}>{employee.name}</option>
                                            {/each}
                                        </select>
                                        <i class="fas fa-star-of-life req-icon"></i>
                                    {/if}
                                </div>
                            </div>
                            <div class="form-group">
                                <RoleSelect {roles} on:changedRole={getChangedRoleId}></RoleSelect>
                            </div>
                            <div class="mt-4">
                                <button type="submit" class="btn btn-blue" on:click|preventDefault={addUser}>{$fields.user.form.addNew}</button>
                                <a href="user" class="btn btn-outline-orange">{$fields.user.form.cancel}</a>     
                            </div>
                        </form>
                    </div>
                </div><!-- .card-body -->
            </div><!-- .card -->
        </div>
    </div>
</div>