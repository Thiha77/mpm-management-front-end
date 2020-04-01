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
    import { editPermissionData, permissionMessages } from '../../../stores/permission/store';
    import { stores,goto } from '@sapper/app';
    import { apiInfo, fields } from '../../../store.js';
    import { Toast } from '../../../util/salert.js';
    import { validate } from '../../../util/validator';
    import ValidationBox from '../../../components/util/ValidationBox.svelte';

    const { session } = stores();

    export let permission;

    let vErrors;
    let constraints = {
        name: {
            presence: { allowEmpty: false }
        },
    };

    const updatePermissionData = async() => {
       
        const url = $apiInfo.basePath + '/permissions/update';

        vErrors = validate(permission, constraints);
        if(vErrors){
            return;
        } 

        let result = await axiosPost(url, permission);
        if(result.error == null){
            Toast.fire(
                'Success!',
                $fields.permission.message.updateSuccess,
                'success'
            )
            goto('../permission');
        }else{
            $permissionMessages = {
                message: '',
                error: result.error
            }
        }
    }
    
</script>

<div class="container">
    {#if vErrors}
        <ValidationBox {vErrors}></ValidationBox>
    {/if}
    {#if $session.lan && $fields}
	    <PermissionEdit {permission} on:updatePermission={updatePermissionData}></PermissionEdit>
    {/if}
</div>