<script>
	import RoleIndex from '../../components/role/index.svelte';
	import ApiGet from '../../components/util/Api.svelte';
	import { role } from '../../stores/role/store.js';
	import ApiPost from '../../util/api.js'

	const deleteRoleData = (event) => {
		let data = {
			id: event.detail.id
		};
		if(confirm("Are you sure want to delete?"))
		{
			let url = "http://localhost:5000/roles/delete";
			ApiPost(url,data);
		}
	};

	// const editRole = (event) => {
	// 	let data = {
	// 		id: event.detail.id,
	// 		name: event.detail.name,
	// 		description: event.detail.description
	// 	};
	//};
</script>

<svelte:head>
	<title>Role</title>
</svelte:head>
<div class="container">
	<h1>{$role.createMessage}</h1>
	<ApiGet url = "http://localhost:5000/roles" method="get" let:data let:loading let:error>
		{#if data}
			<RoleIndex roles={data} on:deleteRole={deleteRoleData}></RoleIndex>
		{/if}
	</ApiGet>
</div>