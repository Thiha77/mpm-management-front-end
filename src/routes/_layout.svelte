<script>
	import Nav from '../components/layout/Nav.svelte';
	import Navbar from '../components/layout/mpm/Navbar.svelte';
	import { stores } from '@sapper/app';
	const { session } = stores();
	import { onMount } from 'svelte';
	
	onMount( () => {
		if(window && window.localStorage){
			$session.user = JSON.parse(localStorage.getItem('user'));
			$session.len = localStorage.getItem('len');
			// console.log(JSON.parse(localStorage.getItem('user')));
			// console.log($session.user);
		}
	})
	
	export let segment;
</script>

<style>
</style>

{#if $session.user}
<Nav {segment}/>
{/if}

<div id="content">
	{#if $session.user}
		<Navbar></Navbar>
	{/if}
	<slot>zzz</slot>
</div>
