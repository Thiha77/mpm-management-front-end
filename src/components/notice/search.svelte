<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

let textSearch;
export let fields;
const search = () => {
    dispatch('search',{textSearch : textSearch});
};

</script>

<form>
    <div class="input-group">
        <input class="form-control" bind:value={textSearch} type="text" placeholder={fields.placeholder.search} aria-label="Search" />
        <div class="input-group-append">
            <button type="submit" class="input-group-text" on:click|preventDefault={search}><i class="fas fa-search text-grey" aria-hidden="true"></i></button>
        </div>
    </div>
</form>