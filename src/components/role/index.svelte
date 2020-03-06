<script>
    import { createEventDispatcher } from 'svelte';
    import { editRoleData } from '../../stores/role/store.js';
    import RoleSearch from './search.svelte';
    export let roles;
    const dispatch = createEventDispatcher();

    let deleteRole = id => {
        dispatch('deleteRole',{id:id});
    };

    let editRole = (role) => {
        $editRoleData = {
            id: role.id,
            name: role.name,
            description: role.description
        };
    };

    const searchRole = (event) => {
        let search = event.detail.search;
        dispatch('searchRoleData',{search});
    };

</script>
<style>
	
</style>
<section>
    <h2>Role List</h2>
    <a class="btn btn-success" href='role/create' style="float:right;margin-bottom: 15px;">Add New Role</a>
    <RoleSearch on:searchRole={searchRole}></RoleSearch>
    <div class="table-responsive" style="margin-top:30px;">
        <table class="table table-bordered">
            <thead>                                     
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {#if roles.length === 0}
                    <tr>No Role Record Found!</tr>
                {:else}
                {#each roles as role}
                    <tr>
                        <td>{role.id}</td>
                        <td>{role.name}</td>
                        <td>{role.description}</td>
                        <td>
                            <!-- <button class="btn btn-info">Edit</button> -->
                            <a href="role/edit" class="btn btn-info" on:click={editRole(role)}>Edit</a>
                            <button class="btn btn-danger" on:click={deleteRole(role.id)}>Delete</button>
                        </td>
                    </tr>
                {/each}
                {/if}
            </tbody>
        </table>
    </div>      
</section>