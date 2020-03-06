<script>
    import { createEventDispatcher } from 'svelte';
    import { editPermissionData } from '../../stores/permission/store.js';
    const dispatch = createEventDispatcher();
    export let permissions;

    let deletePermission = id => {
        dispatch('deletePermission',{id:id});
    };

    let editPermission = (permission) => {
        $editPermissionData = {
            id: permission.id,
            name: permission.name
        };
    };
</script>
<style>
	
</style>
<section>
    <h2>Permission List</h2>
    <a class="btn btn-success" href='permission/create' style="float:right;">Add New Permission</a>
    <div class="table-responsive" style="margin-top:60px;">
        <table class="table table-bordered">
            <thead>                                     
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
               {#if permissions.length === 0}
                    <tr>No Role Record Found!</tr>
                {:else}
                {#each permissions as permission}
                    <tr>
                        <td>{permission.id}</td>
                        <td>{permission.name}</td>
                        <td>
                            <!-- <button class="btn btn-info">Edit</button> -->
                            <a href="permission/edit" on:click={editPermission(permission)} class="btn btn-info">Edit</a>
                            <button on:click={deletePermission(permission.id)} class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                {/each}
                {/if}
            </tbody>
        </table>
    </div>      
</section>