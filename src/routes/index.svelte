<script>
import { stores } from '@sapper/app';
import Dashboard from '../components/dashboard/main.svelte';
const { session } = stores();
</script>
<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Dashboard</h1>
{#if $session.user}
	<h2>Hello {$session.user.name}</h2>
{/if}

<Dashboard></Dashboard>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	h2 {
		text-align: center;
		margin: 0 auto;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>