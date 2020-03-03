<script>
    import Api from '../../components/util/Api.svelte';
    import { user } from '../../store.js';
    import { stores } from '@sapper/app';
    const { session } = stores();
</script>

<Api url="http://localhost:5000/users" method="get" let:data let:loading let:error>

<h1>{$user.name}</h1>
{#if $session.user}
    <h2>{$session.user.name}</h2>
{/if}

<button on:click={ () => { $user = { name: "something"}}}>Change</button>
<button on:click={ () => { $session.user = { name : new Date()}} }>Change Session User Name</button>
{#if data}
<ul>
    {#each data as user}
    <li>{user.name}</li>
    {/each}
</ul>
{:else if loading}
<h1>loading</h1>
{:else if error}
<h1>{error}</h1>
{/if}
</Api>


<style></style>