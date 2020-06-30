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

<div class="container-fluid">
	<div class="row">
		<h2 class="mb-4">Welcome From Management Partners Myanmar!</h2>
		<div class="col-md-12">
			<div class="panel">
				<h3 class="second-title p-3">Dev Shortcuts</h3>
				<ul id="menu">
					<li><h5><a href="http://ec2-54-251-176-122.ap-southeast-1.compute.amazonaws.com/" target="_blank">Redmine</a></h5></li>
					<li><h5><a href="https://github.com" target="_blank">Github</a></h5></li>
				</ul> 
			</div>
		</div>
	</div>
	<hr>
</div>

<Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
	<div class="container-fluid">
		<h4 class="second-title ml-3">MPM Notice Board</h4>	
		<div class="notice-card mb-2">
				{#if data}
					{#each data as notice}
						<NoticePublic {notice}></NoticePublic>
					{/each}
				{/if}
		</div>
		<hr>
	</div>
</Api>

<style>
ul#menu li {
	margin-top:20px;
	margin-bottom:20px;
	padding:10px;
	list-style: none;
	float: left;
}
ul#menu li a{
	background:#ECECEC;
	border-radius:0.55rem;
	padding:10px;
}
.second-title{
	color: #1F93D2;
    text-transform: uppercase;
    /* text-align: center; */
    font-weight: 700;
    position: relative;
    padding-bottom: 15px !important;
}
.second-title:before{
	content: '';
    position: absolute;
    display: block;
    width: 120px;
    height: 1px;
    background: #bccbd3;
    bottom: 1px;
    /* left: calc(50% - 60px); */
}
.second-title:after{
	content: '';
    position: absolute;
    display: block;
    width: 40px;
    height: 3px;
    background: #EE7539;
    bottom: 0;
}
.notice-card{
	margin:20px 60px;
}
h2 {
	text-align: center;
	margin: 0 auto;
}
a {
	color:#45ABCD;
}

</style>