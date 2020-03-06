<script>
	import { onMount } from 'svelte';
	import RolePerIndex from '../../components/rolepermission/index.svelte';
	import { axiosGet, axiosPost} from '../../util/api';
	import { rolePermission } from '../../stores/rolepermission/store';
	import { apiInfo } from '../../store.js';

	let rolePermissions;
	const url = $apiInfo.basePath +"/rolepermissions";
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
			let url = $apiInfo.basePath +"/rolepermissions/delete";
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

{#if $rolePermission.message}
	<h1>{$rolePermission.message}</h1>
{/if}
{#if rolePermissions}
<RolePerIndex {rolePermissions} on:deleteRolePermission={deleteRolePermission}></RolePerIndex>
{/if}
