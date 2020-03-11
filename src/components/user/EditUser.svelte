<script>
    import { createEventDispatcher } from "svelte";
    import Api from '../../components/util/Api.svelte';
    import { userEdit } from '../../stores/user/store.js';
    import RoleSelect from '../role/roleSelect.svelte';
    import { apiInfo } from '../../store.js';
    const dispatch = createEventDispatcher();
    let urlRoleData = $apiInfo.basePath + '/roles/';
    export let employees;
    function updateUser(){
        dispatch('update');
    }
    const getChangedRoleId = (event) => {
        $userEdit.roleId = event.detail.selectedRole;
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
                <div class="form-group">
                <Api url={urlRoleData} method="get" let:data let:loading let:error>
                    {#if data}
                        <RoleSelect roles={data} selectedRoleId={$userEdit.roleId} on:changedRole={getChangedRoleId}></RoleSelect>
                    {/if}
                </Api>
                </div>
                <button type="submit" class="btn btn-success" on:click|preventDefault={updateUser}>Update</button>
                <a href="user" class="btn btn-outline-warning">Cancel</a>   
            </form>
        </div>
    </div>
</div>