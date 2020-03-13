<script>
	import RoleIndex from '../../components/role/index.svelte';
	import RoleSearch from '../../components/role/search.svelte';
	import ApiGet from '../../components/util/Api.svelte';
	import { roleMessages } from '../../stores/role/store.js';
	import { axiosGet,axiosPost } from '../../util/api.js'
	import { apiInfo } from '../../store.js';
	import { goto } from '@sapper/app';

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

	const searchRoleData = async(event) =>{
		let text = event.detail.search.text;
		let searchUrl = (text)? $apiInfo.basePath + '/roles/search/' + text : $apiInfo.basePath + '/roles';
		apiInstance.loadExternal(searchUrl);
	};

	const editRoleData = (event) =>{
		let id = event.detail.role.id;
        goto(`role/edit/${id}`);
	};

</script>

<svelte:head>
	<title>Role</title>
</svelte:head>
<div class="container">
	<h1>{$roleMessages.message}</h1>
	<ApiGet {url} {method} let:data let:loading let:error bind:this={apiInstance}>
		{#if data}
			<RoleIndex roles={data} on:deleteRole={deleteRoleData} on:searchRoleData={searchRoleData} on:editRole={editRoleData}></RoleIndex>
		{/if}
	</ApiGet>
</div>