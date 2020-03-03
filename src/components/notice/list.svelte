<script>
    export let notices;
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    const edit = (notice) => {

    };
    const del = (id) => {
        dispatch('delete', {
            id: id
        });
    }
</script>

<div class="table-wrapper">
    <div class="table-title">
        <div class="row">
            <div class="col-sm-8">
                <h2>Notice</h2>
            </div>
            <div class="col-sm-4">
                <a class="btn btn-primary float-right" href="notice/create" >Add New Notice</a>
            </div>
        </div>
    </div>

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>Title</th>						
                <th>Description</th>
                <th>Summary</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {#if notices}
                {#each notices as notice}   
                <tr>
                    <td>{notice.title}</td>
                    <td>{notice.description}</td>
                    <td>{notice.summary}</td>
                    <td>{notice.Employee['name']}</td>
                    <td>
                        <a class="btn btn-info" href="notice/edit" on:click={edit(notice)}>Edit</a>
                        <button class="btn btn-danger" on:click={del(notice.id)}>Delete</button>
                    </td>
                    </tr>
                {/each} 
                {:else}
                <tr>No Record Found!</tr>
            {/if}    
        </tbody>
    </table>

</div>