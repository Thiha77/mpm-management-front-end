<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

export let fields;
let search = {
    text: ""
}

const searchPermission = () => {
    dispatch('searchPermission',{search});
}

</script>

<div class="input-group">
    <input class="form-control" bind:value={search.text} type="text" placeholder={fields.placeholder.search} aria-label="Search">
    <div class="input-group-append">
        <button class="input-group-text" on:click={searchPermission}><i class="fas fa-search text-grey" aria-hidden="true"></i></button>
    </div>
</div>