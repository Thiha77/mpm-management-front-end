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
<div class="panel">
	<h4 class="m-4 pl-5">Dev Shortcuts</h4>
	<ul id="menu">
		<li><h5><a href="http://ec2-54-251-176-122.ap-southeast-1.compute.amazonaws.com/" target="_blank">Redmine</a></h5></li>
		<li><h5><a href="https://github.com" target="_blank">Github</a></h5></li>
	</ul> 
</div>

<Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
	<div class="notice-card mb-2">
		<h4 class="m-4 pl-5">MPM Notice Board</h4>
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
.panel {
	margin: 40px 12px 0 12px;
    background: #ececec;
    box-shadow: 0px 0px 15px rgba(0,0,0,.33) !important;
    /* border: unset !important; */
    border-radius: 0.45rem;
    border-top: 2px solid #45ABCD;
	padding-bottom:30px;
}
.notice-card{
    margin: 40px 12px 0 12px;
    background: #ececec;
    box-shadow: 0px 0px 15px rgba(0,0,0,.33) !important;
    /* border: unset !important; */
    border-radius: 0.45rem;
    border-top: 6px solid #45ABCD;
	padding-bottom:30px;
}
h2 {
	text-align: center;
	margin: 0 auto;
}
a {
	color:#45ABCD;
}
ul#menu li {
  display:inline;
}

	/* img {
		height: 400px;
		width: 100px;
	} */
</style>