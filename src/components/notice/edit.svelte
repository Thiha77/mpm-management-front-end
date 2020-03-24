<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    const saveNotice = () => {
        dispatch('save', { notice: notice})
    }
    export let notice;
    export let fields;
</script>
<div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-heading bg-blue-mpm p-3">
                    <h3 class="text-white text-uppercase text-center">{fields.form.editTitle}</h3>
                </div>
                <div class="card-body p-5">
                    <div>
                        <div class="form-group">
                            <label for="title">{fields.notice.title}:</label>
                            <input type="text" bind:value={notice.title} class="form-control" placeholder={fields.placeholder.enterTitle} />
                        </div>
                        <div class="form-group">
                            <label for="desc">{fields.notice.description}:</label>
                            <textarea bind:value={notice.description} class="form-control" placeholder={fields.placeholder.enterDescription} ></textarea>
                        </div>
                        <div class="form-group">
                            <label for="sum">{fields.notice.summary}:</label>
                            <textarea bind:value={notice.summary} class="form-control" placeholder={fields.placeholder.enterSummary} ></textarea>
                        </div>
                    </div>
                    <div class="mt-4">
                        <button type="button" on:click={saveNotice} class="btn btn-blue">{fields.form.save}</button>
                        <a href="notice" class="btn btn-outline-orange">{fields.form.cancel}</a>       
                    </div>
                </div><!-- .card-body -->
            </div><!-- .card -->
        </div>
    </div>
</div>