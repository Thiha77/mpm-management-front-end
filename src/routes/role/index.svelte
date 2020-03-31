<script>
	import RoleIndex from '../../components/role/index.svelte';
	import RoleSearch from '../../components/role/search.svelte';
	// import Pagination from '../../components/role/pagination.svelte';
	import ApiGet from '../../components/util/Api.svelte';
	import { roleMessages } from '../../stores/role/store.js';
	import { fields } from '../../stores/role/store';
	import { axiosGet,axiosPost } from '../../util/api.js'
	import { apiInfo } from '../../store.js';
	import { stores,goto } from '@sapper/app';
	import { Toast, CfmDelete } from '../../util/salert';
	import enFields from '../../languages/en/role.json';
    import jpFields from'../../languages/jp/role.json';

    const { session } = stores();
    $: $fields = $session.lan == 'en' ? enFields : jpFields;
	
	let url = $apiInfo.basePath + '/roles';
	const method = 'get';
	let apiInstance;
	
	const deleteRoleData = async(event) => {
		let id = event.detail.id;
		CfmDelete.fire().then((result) => {
			if (result.value) {
				del(id);
			}
		});
	}

	 const del = async(id) => {
		const urlDel = $apiInfo.basePath + '/roles/delete';
		let result = await axiosPost(urlDel, { id : id});
        if(result.data > 0){
            apiInstance.refresh();
            Toast.fire(
            'Deleted!',
            $fields.message.deleteSuccess,
            'success'
            );
        }
	}
	
	const searchRoleData = async(event) =>{
		let text = event.detail.search.text;
		let searchUrl = (text)? $apiInfo.basePath + '/roles/search/' + text : $apiInfo.basePath + '/roles';
		apiInstance.loadExternal(searchUrl);
	}

	const editRoleData = (event) =>{
		let id = event.detail.role.id;
        goto(`role/edit/${id}`);
	}

</script>

<svelte:head>
	<title>Role</title>
</svelte:head>
<<<<<<< HEAD
<section class="pr-2 pl-2">
	<div class="container-fluid">
		<h1>{$roleMessages.message}</h1>
		<ApiGet {url} {method} let:data let:loading let:error bind:this={apiInstance}>
			{#if data}
				{#if $session.lan && fields}
					<RoleIndex roles={data} on:deleteRole={deleteRoleData} on:searchRoleData={searchRoleData} on:editRole={editRoleData} {fields}></RoleIndex>
					<!-- <Pagination roles={data}></Pagination> -->
				{/if}
=======
<div class="container">
	<h1>{$roleMessages.message}</h1>
	<ApiGet {url} {method} let:data let:loading let:error bind:this={apiInstance}>
		{#if data}
			{#if $session.lan && $fields}
				<RoleIndex roles={data} on:deleteRole={deleteRoleData} on:searchRoleData={searchRoleData} on:editRole={editRoleData}></RoleIndex>
				<!-- <Pagination roles={data}></Pagination> -->
>>>>>>> 1007b4176512a9e32e186147fc52bd19959e70df
			{/if}
		</ApiGet>
	</div>
</section>