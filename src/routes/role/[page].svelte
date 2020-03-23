<script context="module">
    import { axiosGet } from '../../util/api';
    import config from '../../config';
	export async function preload({ params }) {
        
        let page = params.page;
        let url = `${config.apiInfo.basePath}/roles/list/${page}`;
        let res = await axiosGet(url);
		if (res.data) {
			return { roles: res.data };
		}else{
            this.error(404, 'Not Found!');
        }
	}
</script>
<script>
    import RoleIndex from '../../components/role/index.svelte';
	import RoleSearch from '../../components/role/search.svelte';
	// import Pagination from '../../components/role/pagination.svelte';
	import ApiGet from '../../components/util/Api.svelte';
	import { roleMessages } from '../../stores/role/store.js';
	import { axiosPost } from '../../util/api.js'
	import { apiInfo } from '../../store.js';
	import { goto } from '@sapper/app';
	import { Toast, CfmDelete } from '../../util/salert';

    let url = $apiInfo.basePath + '/roles/';
    const method = 'get';
    let apiInstance;
    
    export let roles;

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
            'Role has been deleted.',
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
<div class="container">
	<h1>{$roleMessages.message}</h1>
	<ApiGet {url} {method} let:data let:loading let:error bind:this={apiInstance}>
		{#if roles}
			<RoleIndex {roles}></RoleIndex>
			<!-- <Pagination roles={data}  {current_page}></Pagination> -->
		{/if}
	</ApiGet>
</div>