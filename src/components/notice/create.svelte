<script>
    import { createEventDispatcher, onMount} from 'svelte';
    import { stores,goto } from '@sapper/app';
    import { fields } from '../../store';

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

<div class="row">
    <div class="col mx-auto">
        <div class="card card-mpm1">
            <div class="card-heading bg-blue-mpm p-3">
                <h3 class="text-white text-uppercase text-center">{$fields.notice.form.createTitle}</h3>
            </div>
            <div class="card-body p-5">
                <div>
                    <div class="form-group">
                        <label for="title">{$fields.notice.notice.title}:</label>
                        <input type="text" bind:value={notice.title} class="form-control" placeholder={$fields.notice.placeholder.enterTitle} />
                    </div>
                    <div class="form-group">
                        <label for="desc">{$fields.notice.notice.description}:</label>
                        <textarea bind:value={notice.description} class="form-control" placeholder={$fields.notice.placeholder.enterDescription} ></textarea>
                    </div>
                    <div class="form-group">
                        <label for="sum">{$fields.notice.notice.summary}:</label>
                        <textarea bind:value={notice.summary} class="form-control" placeholder={$fields.notice.placeholder.enterSummary} ></textarea>
                    </div>
                </div>
                <div class="mt-4">
                    <button type="button" on:click={saveNotice} class="btn btn-info">{$fields.notice.form.save}</button>
                </div>                
            </div>
        </div><!-- .card  -->
    </div>
</div>