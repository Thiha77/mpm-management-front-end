<script>
	import { stores } from '@sapper/app';
	import { apiInfo, fields } from '../../store';
	import Api from '../../components/util/Api.svelte';
	import NoticeDetail from '../../components/notice/detail.svelte';
	let url = $apiInfo.basePath + '/notices';
	const method = 'get';
	let apiInstance;
	const { session } = stores();

</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Welcome From Management Partners Myanmar!</h1>
{#if $session.user}
	<h2>Hello {$session.user.name}</h2>
{/if}

<Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
	{#if data}
		{#each data as notice}
		<NoticeDetail {notice}></NoticeDetail>
		{/each}
	{/if}
</Api>

<style>
	h1 {
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

	img {
		height: 400px;
		width: 100px;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>