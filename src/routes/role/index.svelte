<script>
	import RoleIndex from '../../components/role/index.svelte';
	import ApiGet from '../../components/util/Api.svelte';
	import { roleMessages } from '../../stores/role/store.js';
	import { axiosPost } from '../../util/api.js'
	import { apiInfo } from '../../store.js';
	let url = $apiInfo.basePath + '/roles';
	const method = 'get';
	let apiInstance;
	
	const deleteRoleData = async(event) => {
		let id = event.detail.id;
		if(confirm("Are you sure want to delete?"))
		{
			const urlDel = $apiInfo.basePath + '/roles/delete';
			let result = await axiosPost(urlDel, { id : id})
			console.log(result);
            apiInstance.refresh();
		}
	};

</script>

<svelte:head>
	<title>Role</title>
</svelte:head>
<div class="container">
	<h1>{$roleMessages.message}</h1>
	<ApiGet {url} {method} let:data let:loading let:error bind:this={apiInstance}>
		{#if data}
			<RoleIndex roles={data} on:deleteRole={deleteRoleData}></RoleIndex>
		{/if}
	</ApiGet>
</div>