<script>
	import Nav from '../components/layout/Nav.svelte';
	import Navbar from '../components/layout/mpm/Navbar.svelte';
	export let segment;
</script>

<style>
</style>

<Nav {segment}/>

<div id="content">
	<Navbar></Navbar>
	<slot>zzz</slot>
</div>
