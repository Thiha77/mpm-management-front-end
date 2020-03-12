<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

let textSearch;

const search = () => {
    dispatch('search',{textSearch : textSearch});
};

</script>

<div class="input-group">
    <input class="form-control" bind:value={textSearch} type="text" placeholder="Search" aria-label="Search" />
    <!-- <div class="input-group-append"> -->
        <button class="input-group-text" on:click={search}>Search</button>
    <!-- </div> -->
</div>