<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
import { fields } from '../../stores/role/store';

let search = {
    text: ""
}

const searchRole = () => {
    dispatch('searchRole',{search});
}

</script>

<div class="input-group">
    <input class="form-control" bind:value={search.text} type="text" placeholder={$fields.placeholder.search} aria-label="Search">
    <div class="input-group-append">
        <button class="input-group-text" on:click={searchRole}><i class="fas fa-search text-grey" aria-hidden="true"></i></button>
    </div>
</div>