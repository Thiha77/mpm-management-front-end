<script>
	import { onMount } from 'svelte';
	import RolePermissionIndex from '../../components/rolepermission/index.svelte';
	import { axiosGet, axiosPost} from '../../util/api';
	import { rolePermission } from '../../stores/rolepermission/store';
	import { apiInfo } from '../../store.js';
	import { Toast, CfmDelete } from '../../util/salert';

	let url = $apiInfo.basePath + '/rolepermissions';
	const method = 'get';
	let apiInstance;

	let rolePermissions;

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
		 CfmDelete.fire().then((result) => {
			if (result.value) {
				let url = $apiInfo.basePath +"/rolepermissions/delete";
				axiosPost(url,data)
				.then(
					() => {
						updateTable();
						Toast.fire(
							'Deleted!',
							'RolePermission has been deleted.',
							'success'
						);
					}
				);	
			}
		});
	};

	const searchRolePermissionData = async(event) => {
		let text = event.detail.search.text;
		url = $apiInfo.basePath +"/rolepermissions/search/"+text;
		axiosGet(url)
		.then((result) => {
			rolePermissions = result.data;
		});
	};
</script>

<svelte:head>
	<title>RolePermission</title>
</svelte:head>

{#if $rolePermission.message}
	<h1>{$rolePermission.message}</h1>
{/if}
{#if rolePermissions}
<RolePermissionIndex {rolePermissions} on:deleteRolePermission={deleteRolePermission} on:searchRolePermissionData={searchRolePermissionData}></RolePermissionIndex>
{/if}
