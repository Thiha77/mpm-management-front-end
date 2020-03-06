<script>
	import PerIndex from '../../components/permission/index.svelte';
	import ApiGet from '../../components/util/Api.svelte';
	import { permissionMessages } from '../../stores/permission/store.js';
	import { axiosPost } from '../../util/api.js';
	import { apiInfo } from '../../store.js';

	let url = $apiInfo.basePath + '/permissions';
    const method = 'get';
    let apiInstance;

	const deletePermission = async(event) => {
		let id = event.detail.id;
        if(confirm("Are you sure you want to delete?")){
            const urlDel = $apiInfo.basePath + '/permissions/delete';
            let result = await axiosPost(urlDel, { id : id})
            apiInstance.refresh();
        }
	};

</script>

<svelte:head>
	<title>Permission</title>
</svelte:head>

<div class="container">
	<h1>{$permissionMessages.message}</h1>
    <ApiGet {url} {method} let:data let:loading let:error bind:this={apiInstance}>
		{#if data}
			<PerIndex permissions={data} on:deletePermission={deletePermission}></PerIndex>
		{/if}
	</ApiGet>
</div>