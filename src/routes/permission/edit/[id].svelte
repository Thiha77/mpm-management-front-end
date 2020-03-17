<script context="module">
    import { axiosGet } from '../../../util/api';
    import config from '../../../config';
	export async function preload({ params }) {
        
        let id = params.id;
        let urlPermissionById = `${config.apiInfo.basePath}/permissions/${id}`;
        let res = await axiosGet(urlPermissionById);
		if (res.data) {
			return { permission: res.data };
		}else{
            this.error(404, 'Not Found!');
        }
	}
</script>

<script>
    import PermissionEdit from '../../../components/permission/edit.svelte';
    import { axiosPost } from '../../../util/api.js'
    import { editPermissionData, permissionMessages } from '../../../stores/permission/store.js';
    import { goto } from '@sapper/app';
    import { apiInfo } from '../../../store.js';
    import { Toast } from '../../../util/salert.js';
    export let permission;

    const updatePermissionData = async() => {
       
        const url = $apiInfo.basePath + '/permissions/update';
        let result = await axiosPost(url, permission);
        if(result.error == null){
            Toast.fire(
                'Success!',
                'Permission is successfully updated.',
                'success'
            )
            goto('../permission');
        }else{
            $permissionMessages = {
                    message: '',
                    error: result.error
                }
        }
    };
    
</script>

<div class="container">
	<PermissionEdit {permission} on:updatePermission={updatePermissionData}></PermissionEdit>
</div>