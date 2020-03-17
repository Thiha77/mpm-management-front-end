<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    const saveNotice = () => {
        dispatch('save', { notice: notice})
    }
    export let notice;
</script>
<div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">Notice Update Form</h3>
                </div>
                <div class="card-body p-5">
                    <div>
                        <div class="form-group">
                            <label for="title">Title:</label>
                            <input type="text" bind:value={notice.title} class="form-control" placeholder="Enter title" />
                        </div>
                        <div class="form-group">
                            <label for="desc">Description:</label>
                            <textarea bind:value={notice.description} class="form-control" placeholder="Enter description" ></textarea>
                        </div>
                        <div class="form-group">
                            <label for="sum">Summary:</label>
                            <textarea bind:value={notice.summary} class="form-control" placeholder="Enter summary" ></textarea>
                        </div>
                    </div>
                    <div class="mt-4">
                        <button type="button" on:click={saveNotice} class="btn btn-success">Save</button>  
                    </div>
                </div><!-- .card-body -->
            </div><!-- .card -->
        </div>
    </div>
</div>