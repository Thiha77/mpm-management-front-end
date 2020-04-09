<script>
import { createEventDispatcher } from 'svelte';
import { fields } from '../../store';
const dispatch = createEventDispatcher();
// let search = {
//     text: ""
// }
// export let fields;

let search;
const searchUser = () => {
    dispatch('searchUserData',{search:search});
}

</script>

<div class="input-group">
    <input class="form-control" bind:value={search} type="text" placeholder="{$fields.user.placeholder.search}" aria-label="Search">
    <div class="input-group-append">
        <button class="input-group-text" on:click={searchUser}><i class="fas fa-search text-grey" aria-hidden="true"></i></button>
    </div>
</div>