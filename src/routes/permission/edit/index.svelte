<script>
    import PerEdit from '../../../components/permission/edit.svelte';
    import { axiosPost } from '../../../util/api.js'
    import { editPermissionData, permissionMessages } from '../../../stores/permission/store.js';
    import { goto } from '@sapper/app';
    import { apiInfo } from '../../../store.js';

    const updatePermissionData = async() => {
        let uptData = {
            id: $editPermissionData.id,
            name: $editPermissionData.name
        };
       
        const url = $apiInfo.basePath + '/permissions/update';
        let result = await axiosPost(url, uptData);
        if(result.error == null){
            $permissionMessages = {
                message: 'Update Success',
                error: 'Error'
            }
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
	<PerEdit on:updatePermission={updatePermissionData}></PerEdit>
</div>