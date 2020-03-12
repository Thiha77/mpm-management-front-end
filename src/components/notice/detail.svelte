<script>
    export let notice;
</script>

<section>
    <h2>Notice Detail</h2>
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <label for="title">Title:</label>
                <label class="form-control" placeholder="Enter title" >{notice.title}</label>
            </div>
            <div class="form-group">
                <label for="desc">Description:</label>
                <textarea value={notice.description} class="form-control" placeholder="Enter description" readonly></textarea>
            </div>
            <div class="form-group">
                <label for="sum">Summary:</label>
                <textarea value={notice.summary} class="form-control" placeholder="Enter summary" readonly></textarea>
            </div>
        </div> 
        <div class="card-footer">
        </div>
    </div>
</section>

<style>
</style>