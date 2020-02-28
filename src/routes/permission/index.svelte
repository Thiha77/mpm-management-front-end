<script>
	import PerIndex from '../../components/permission/index.svelte';
	import ApiGet from '../../components/util/Api.svelte';
	import { permission } from '../../stores/permission/store.js';
	import ApiPost from '../../util/api.js';

	const deletePer = (event) => {
		let delData = {
			id: event.detail.id
		};
		if(confirm("Are you sure want to delete?"))
		{
			let url = "http://localhost:5000/permissions/delete";
			ApiPost(url,delData);
		}
	};

</script>

<svelte:head>
	<title>Permission</title>
</svelte:head>

<div class="container">
	<h1>{$permission.createMessage}</h1>
    <ApiGet url = "http://localhost:5000/permissions" method="get" let:data let:loading let:error>
		{#if data}
			<PerIndex permissions={data} on:deletePer={deletePer}></PerIndex>
		{/if}
	</ApiGet>
</div>