<script>
	import PermissionIndex from '../../components/permission/index.svelte';
	import ApiGet from '../../components/util/Api.svelte';
	import { permissionMessages } from '../../stores/permission/store';
	import { axiosPost } from '../../util/api.js';
	import { apiInfo, fields } from '../../store.js';
	import { stores,goto } from '@sapper/app';
	import { Toast, CfmDelete } from '../../util/salert';
	import NoAccess from '../../components/util/NoAccess.svelte';

    const { session } = stores();
	
	let url = $apiInfo.basePath + '/permissions';
    const method = 'get';
    let apiInstance;

	const deletePermission = async(event) => {
		let id = event.detail.id;
		CfmDelete.fire().then((result) => {
			if (result.value) {
				del(id);
			}
		});
	}

	const del = async(id) => {
		const urlDel = $apiInfo.basePath + '/permissions/delete';
		let result = await axiosPost(urlDel, { id : id});
        if(result.data > 0){
            apiInstance.refresh();
            Toast.fire(
            'Deleted!',
            $fields.permission.message.deleteSuccess,
            'success'
            );
        }
    }

	const searchPermissionData = async(event) => {
		let text = event.detail.search.text;
		let searchUrl = (text)? $apiInfo.basePath + '/permissions/search/' + text : $apiInfo.basePath + '/permissions';
		apiInstance.loadExternal(searchUrl);
	}

	const editPermissionData = (event) => {
		let id = event.detail.permission.id;
        goto(`permission/edit/${id}`);
	}
</script>

<svelte:head>
	<title>Permission</title>
</svelte:head>

{#if $session.user && $session.user.permissions.permission && $session.user.permissions.permission != 'none'}
<section class="pr-2 pl-2">
	<div class="container-fluid">
		<h1>{$permissionMessages.message}</h1>
		<ApiGet {url} {method} let:data let:loading let:error bind:this={apiInstance}>
			{#if data}
				{#if $session.lan && $fields}
					<PermissionIndex permissions={data} on:deletePermission={deletePermission} on:searchPermission={searchPermissionData} on:editPermission={editPermissionData}></PermissionIndex>
				{/if}
			{/if}
		</ApiGet>
	</div>
</section>
{:else}
<NoAccess></NoAccess>
{/if}