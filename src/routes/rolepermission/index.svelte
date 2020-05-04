<script>
	import { onMount } from 'svelte';
	import RolePermissionIndex from '../../components/rolepermission/index.svelte';
	import { axiosGet, axiosPost} from '../../util/api';
	import { rolePermission } from '../../stores/rolepermission/store';
	import { apiInfo, fields } from '../../store';
	import { stores, goto } from '@sapper/app';
    import Swal from 'sweetalert2';
    import { Toast, CfmDelete } from '../../util/salert';

	const { session } = stores();

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
							$fields.rolepermission.message.deleteSuccess,
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
	{#if $session.lan && $fields}
		<RolePermissionIndex {rolePermissions} on:deleteRolePermission={deleteRolePermission} on:searchRolePermissionData={searchRolePermissionData}></RolePermissionIndex>
	{/if}
{/if}
