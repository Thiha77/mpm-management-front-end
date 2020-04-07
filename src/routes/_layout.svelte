<script>
	import Nav from '../components/layout/Nav.svelte';
	import Navbar from '../components/layout/mpm/Navbar.svelte';
	import { nav,subNav } from '../store';

	import { stores } from '@sapper/app';
	const { session } = stores();
	import { onMount } from 'svelte';
	
	onMount( () => {
		if(window && window.localStorage){
			$session.user = JSON.parse(localStorage.getItem('user'));
			$session.lan = localStorage.getItem('lan');
		}
	})
	
	export let segment;
</script>

<style>
</style>

{#if $session.user}
<Nav {segment}/>
{/if}

<div id="content" style="margin-left:{$nav.showSideBar = $nav.showSideBar ? '0' : '270px'};"  class="mt-mpm-6">
	{#if $session.user}
		<Navbar></Navbar>
	{/if}
	<slot>zzz</slot>
</div>
