<script>
	import { stores } from '@sapper/app';
	import { apiInfo, fields } from '../../store';
	import Api from '../../components/util/Api.svelte';
	import NoticeDetail from '../../components/notice/detail.svelte';
	import NoticePublic from '../../components/notice/noticePublic.svelte';
	let url = $apiInfo.basePath + '/notices';
	const method = 'get';
	let apiInstance;
	const { session } = stores();

</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

<h2 class="mb-4">Welcome From Management Partners Myanmar!</h2>

<Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
	<div class="notice-card mb-2">
		{#if $session.user}
			<h3 class="m-4 pl-5">Hello {$session.user.name}</h3>
		{/if}
		<div class="container">
			{#if data}
				{#each data as notice}
					<NoticePublic {notice}></NoticePublic>
				{/each}
			{/if}
		</div>
	</div>
</Api>

<style>

.notice-card{
    width: 1250px;
    margin: 40px auto 0 auto;
    background: #ececec;
    box-shadow: 0px 0px 15px rgba(0,0,0,.33) !important;
    /* border: unset !important; */
    border-radius: 0.45rem;
    border-top: 8px solid #45ABCD;
	padding-bottom:30px;
	height:85vh;
}
h2 {
	text-align: center;
	margin: 0 auto;
}

	/* img {
		height: 400px;
		width: 100px;
	} */
</style>