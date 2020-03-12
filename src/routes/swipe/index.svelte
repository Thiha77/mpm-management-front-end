<script>
    // import Api from '../../components/util/Api.svelte';
    import SwipeView from '../../components/swipe/Swipe.svelte';
    import { stores } from '@sapper/app';
    const { session } = stores(); 
</script>
<svelte:head>
	<title>Swipe</title>
</svelte:head>
{#if $session.user}
<SwipeView></SwipeView>
{/if}