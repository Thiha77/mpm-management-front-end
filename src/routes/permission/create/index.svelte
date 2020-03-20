<script>
    import PermissionCreate from '../../../components/permission/create.svelte';
    import { axiosPost } from '../../../util/api.js'
    import { permissionMessages } from '../../../stores/permission/store.js';
    import { stores, goto } from '@sapper/app';
    import { apiInfo } from '../../../store.js';
    import { Toast } from '../../../util/salert.js';
    import { validate } from '../../../util/validator';
    import ValidationBox from '../../../components/util/ValidationBox.svelte';

    let vErrors;
    let constraints = {
        name: {
            presence: { allowEmpty: false }
        },
    };

    let permissionData = {
        name: "",
        specialPer: false
    };

    const savePermissionData = async() => {
        const url = $apiInfo.basePath + '/permissions/create';

        vErrors = validate(permissionData, constraints);
        if(vErrors){
            return;
        }  

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
    {#if vErrors}
        <ValidationBox {vErrors}></ValidationBox>
    {/if}
	<PermissionCreate bind:name={permissionData.name} bind:specialPer={permissionData.specialPer} on:savePermission={savePermissionData}></PermissionCreate>
</div>