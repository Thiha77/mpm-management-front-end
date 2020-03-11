<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

let search = {
    text: ""
};

const searchRolePermission = () => {
    dispatch('searchRolePermission',{search});
};

</script>

<div class="input-group">
    <input class="form-control" bind:value={search.text} type="text" placeholder="Search" aria-label="Search">
    <div class="input-group-append">
        <button class="input-group-text" on:click={searchRolePermission}><i class="fas fa-search text-grey" aria-hidden="true"></i></button>
    </div>
</div>