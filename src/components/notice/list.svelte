<script>
    export let notices;
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    const edit = (notice) => {
        dispatch('edit', {
            notice: notice
        })
    }
    const del = (id) => {
        dispatch('delete', {
            id: id
        });
    }
</script>

<section>
    <div class="row">
        <div class="col">
            <div class="">
                <div class="table-wrapper card-list-mpm1">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6"><h3 class="float-left">Notice List</h3></div>
                            <div class="col-sm-6"><a class="btn btn-white float-right" href='notice/create'><i class="fas fa-plus-circle"></i> Add New Notice</a></div>
                        </div>
                    </div>
                    <table class="table table-hover table-responsive-sm ">
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
                                    <td><a href={'notice/detail/' + notice.id}>{notice.title}</a></td>
                                    <td><span class="txt-limit">{notice.description}</span></td>
                                    <td>{notice.summary}</td>
                                    <td>{notice.Employee['name']}</td>                                                         
                                    <td>
                                        <button class="btn btn-blue" on:click={edit(notice)} title="Edit"><i class="fas fa-pen"></i></button>
                                        <button class="btn btn-danger" on:click={del(notice.id)} title="Delete"><i class="far fa-trash-alt"></i></button>
                                    </td>
                                    </tr>
                                {/each} 
                                {:else}
                                <tr>No Record Found!</tr>
                            {/if}    
                        </tbody>
                    </table>
                </div><!-- .table-wrapper  -->
            </div><!-- .table-responsive-sm  -->
        </div>
    </div>
</section>