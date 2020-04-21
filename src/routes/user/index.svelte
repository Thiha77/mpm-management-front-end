<script>    
    import Api from '../../components/util/Api.svelte';
    import { axiosPost } from '../../util/api';
    import UserList from '../../components/user/UserList.svelte';
    import { Toast, CfmDelete } from '../../util/salert';
    import SearchUser from '../../components/user/SearchUser.svelte';
    // import { user} from '../../store.js';
    import { apiInfo, fields } from '../../store';
    import {stores, goto } from '@sapper/app';
    import enFields from '../../languages/en/user.json';
    import jpFields from'../../languages/jp/user.json';
    let url = $apiInfo.basePath + '/users';
    import axios from 'axios';
    const method = 'get';
    const { session } = stores();
    let apiInstance;
    const deleteUserData = async(event) => {
        let id = event.detail.id;
        CfmDelete.fire().then((result) => {
                if (result.value) {
                    del(id);
                }
            });
        // if(confirm("Are you sure you want to delete?")){
        //     const urlDel = $apiInfo.basePath + '/users/delete';
        //     let result = await axiosPost(urlDel, { id : id})
        //     apiInstance.refresh();
        // }
    };
    const del = async(id) => {
        const urlDel = $apiInfo.basePath + '/users/delete';
        let result = await axiosPost(urlDel, { id : id});
        if(result.data > 0){
            apiInstance.refresh();
            Toast.fire(
            'Deleted!',
            'User has been deleted.',
            'success'
            );
        }
    }
    const searchUserData = async(event) =>{
        let search = event.detail.search;
		let searchUrl = (search)? $apiInfo.basePath + '/users/search/' + search : $apiInfo.basePath + '/users';
		apiInstance.loadExternal(searchUrl);
	}
    const editUser = (event) => {
        let id = event.detail.user.id;
        goto(`user/edit/${id}`);
    };
</script>
<svelte:head>
    <title>User</title>
</svelte:head>
<section class="pr-2 pl-2">
    <div class="container-fluid">
    {#if $session.lan && $fields}
        <div class="row">
            <div class="col-md-8"></div>
            <div class="col-md-4 float-right">
                <SearchUser on:searchUserData={searchUserData}></SearchUser>
            </div>
        </div>
        <Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
            {#if data}
                <UserList users={data} on:deleteUser={deleteUserData} on:editUser={editUser} {$fields}></UserList>
            {/if}
        </Api>
    {/if}
    </div>
</section>
