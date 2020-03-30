<script>
    import { createEventDispatcher } from 'svelte';
    import { editPermissionData, fields } from '../../stores/permission/store';
    import PermisisonSearch from './search.svelte';
    const dispatch = createEventDispatcher();

    export let permissions;

    let deletePermission = id => {
        dispatch('deletePermission',{id:id});
    }

    // let editPermission = (permission) => {
    //     $editPermissionData = {
    //         id: permission.id,
    //         name: permission.name
    //     };
    // };

    const searchPermission = (event) => {
        let search = event.detail.search;
        dispatch('searchPermission',{search});
    }

    const editPermission = (permission) => {
        dispatch('editPermission',{permission:permission});
    }

</script>
<style>
	
</style>
<section>
    <div class="row">
        <div class="col">
            <PermisisonSearch on:searchPermission={searchPermission}></PermisisonSearch>
            <div class="table-responsive-sm ">
                <div class="table-wrapper">
                    <div class="table-title">
                         <div class="row">
                            <div class="col-sm-6"><h3 class="float-left">{$fields.form.listTitle}</h3></div>
                            <div class="col-sm-6"><a class="btn btn-orange float-right" href='permission/create'><i class="fas fa-plus-circle"></i> {$fields.form.addNew}</a></div>
                        </div>
                    </div><!-- .table-title -->
                    <table class="table table-hover">
                        <thead>                                     
                            <tr>
                                <th>{$fields.permission.id}</th>
                                <th>{$fields.permission.name}</th>
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
                                            <button on:click={editPermission(permission)} class="btn btn-blue" title="Edit"><i class="fas fa-pen"></i></button>
                                            <button on:click={deletePermission(permission.id)} class="btn btn-danger" title="Delete"><i class="far fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                {/each}
                            {/if}
                        </tbody>
                    </table>
                </div><!-- .table-wrapper -->
            </div><!-- .table-responsive-sm -->
        </div>
    </div>
</section>