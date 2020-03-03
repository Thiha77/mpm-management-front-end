<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let notice = {
        title: '',
        description: '',
        summary: ''
    }

    const saveNotice = () => {
        dispatch('save', { notice: notice})
    }

</script>

<section>
    <h2>Create New Notice</h2>
    <div class="card">
        <div class="card-body">
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
        <div class="card-footer">
            <button type="button" on:click={saveNotice} class="btn btn-primary">Save</button>
        </div>
    </div>
</section>

<style>
</style>