<script>
    import PermissionCreate from '../../../components/permission/create.svelte';
    import { axiosPost } from '../../../util/api.js'
    import { permissionMessages } from '../../../stores/permission/store.js';
    import { stores, goto } from '@sapper/app';
    import { apiInfo } from '../../../store.js';
    import { Toast } from '../../../util/salert.js';

    let permissionData = {
        name: "",
        specialPer: false
    };

    const savePermissionData = async() => {
        const url = $apiInfo.basePath + '/permissions/create';
        let result = await axiosPost(url, permissionData);
        if(result.error == null){
            Toast.fire(
                'Success!',
                'New role is successfully created.',
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
	<PermissionCreate bind:name={permissionData.name} bind:specialPer={permissionData.specialPer} on:savePermission={savePermissionData}></PermissionCreate>
</div>