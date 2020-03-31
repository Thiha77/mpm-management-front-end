<script>
    import { createEventDispatcher } from 'svelte';
    import { editRoleData } from '../../stores/role/store.js';
    import RoleSearch from './search.svelte';
    import { fields } from '../../store';

    export let roles;
    const dispatch = createEventDispatcher();

    let deleteRole = id => {
        dispatch('deleteRole',{id:id});
    }

    let editRole = (role) => {
        dispatch("editRole",{role:role});
    }

    const searchRole = (event) => {
        let search = event.detail.search;
        dispatch('searchRoleData',{search});
    }

</script>
<style>
	
</style>

<div class="row">
    <div class="col-md-8"></div>
    <div class="col-md-4 float-right">
        <RoleSearch on:searchRole={searchRole}></RoleSearch>
    </div>
</div>
<div class="row">
    <div class="col">
        <div class="table-wrapper card-list-mpm1">
            <div class="table-title">
                <div class="row">
                    <div class="col col-sm-6"><h3 class="float-left">{$fields.form.listTitle}</h3></div>
                    <div class="col col-sm-6"><a class="btn btn-white float-right" href='role/create'><i class="fas fa-plus-circle"></i> {$fields.form.addNew}</a></div>
                </div>
            </div>
            <table class="table table-hover table-responsive-sm ">
                <thead>                                     
                    <tr>
                        <th>{$fields.role.id}</th>
                        <th>{$fields.role.name}</th>
                        <th>{$fields.role.description}</th>
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
                                    <button class="btn btn-blue" on:click={editRole(role)} title="Edit"><i class="fas fa-pen"></i></button>
                                    <button class="btn btn-danger" on:click={deleteRole(role.id)} title="Delete"><i class="far fa-trash-alt"></i></button>
                                </td>
                            </tr>
                        {/each}
                    {/if}
                </tbody>
            </table><!-- .table-hover -->
        </div><!-- .table-wrapper -->
    </div><!-- .col -->
</div>