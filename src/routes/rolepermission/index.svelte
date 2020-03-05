<script>
	import { onMount } from 'svelte';
	import RolePerIndex from '../../components/rolepermission/index.svelte';
	import { axiosGet, axiosPost} from '../../util/api';

	let rolePermissions;
	const url = "http://localhost:5000/rolepermissions";
	onMount( async() => {
		axiosGet(url)
		.then((result) => {
			rolePermissions = result.data;
		});
	});
	
	const updateTable = () => {
		axiosGet(url)
		.then((result) => {
			rolePermissions = result.data;
		});
	};

	const deleteRolePermission = (event) => {
		let data = {
			id: event.detail.id
		};
		if(confirm("Are you sure want to delete?"))
		{
			let url = "http://localhost:5000/rolepermissions/delete";
			axiosPost(url,data)
			.then(
				() => { updateTable() }
			);	
		}
	};
</script>

<svelte:head>
	<title>RolePermission</title>
</svelte:head>

{#if rolePermissions}
<RolePerIndex {rolePermissions} on:deleteRolePermission={deleteRolePermission}></RolePerIndex>
{/if}
