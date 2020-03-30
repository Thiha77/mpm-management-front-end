<script>
    // export let fields;
    import { createEventDispatcher } from "svelte";
    import Api from '../../components/util/Api.svelte';
    import { userEdit , fields} from '../../stores/user/store.js';
    import RoleSelect from '../role/roleSelect.svelte';
    import { apiInfo } from '../../store.js';
    const dispatch = createEventDispatcher();
    let urlRoleData = $apiInfo.basePath + '/roles/';
    // export let employees;
    export let user;
    function updateUser(){
        dispatch('update');
    }
    const getChangedRoleId = (event) => {
        user.roleId = event.detail.selectedRole;
    }
</script>
<div class="container-fluid">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">{$fields.form.updateTitle}</h3>
                </div>
                <div class="card-body p-5">
                    <form>
                        <div class="form-group">
                            <label for="title">{$fields.user.name}</label>
                            <input class="form-control" bind:value={user.name} type="text">
                        </div>
                        <div class="form-group">
                            <label for="title">{$fields.user.userName}</label>
                            <input type="text" bind:value={user.userName} class="form-control" placeholder="Title" />
                        </div>
                        <div class="form-group">
                            <label for="title">{$fields.user.password}</label>
                            <input type="password" bind:value={user.password} class="form-control" placeholder="Title" />
                        </div>
                        <div class="form-group">
                            <label for="name">{$fields.user.empName}</label>
                            <!-- {#if employees}
                                <select class="form-control" disabled>
                                    <option value="0">Please Select Employee</option>
                                    {#each employees as employee}
                                        {#if employee.id === user.employeeId}
                                            <option value={employee.id} selected>{employee.name}</option>
                                        {/if}
                                    {/each}
                                </select>
                            {/if} -->
                            <select class="form-control" disabled>
                                <option value={user.employeeId} selected>{user.Employee['name']}</option>
                            </select>
                        </div>
                        <div class="form-group">
                        <Api url={urlRoleData} method="get" let:data let:loading let:error>
                            {#if data}
                                <RoleSelect roles={data} selectedRoleId={user.roleId} on:changedRole={getChangedRoleId}></RoleSelect>
                            {/if}
                        </Api>
                        </div>
                        <div class="mt-4">
                            <button type="submit" class="btn btn-blue" on:click|preventDefault={updateUser}>{$fields.form.update}</button>
                            <a href="user" class="btn btn-outline-orange">{$fields.form.back}</a>   
                        </div>
                    </form>
                </div>
            </div><!-- .card -->
        </div>
    </div>
</div>