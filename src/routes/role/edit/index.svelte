<script>
    import RoleEdit from '../../../components/role/edit.svelte';
    import { axiosPost } from '../../../util/api.js'
    import { apiInfo } from '../../../store.js';
    import { editRoleData, roleMessages } from '../../../stores/role/store.js';
    import { goto } from '@sapper/app';
    
   const updateRoleData = async() => {
        let editData = {
           id: $editRoleData.id,
           name: $editRoleData.name,
           description: $editRoleData.description
           
        };

        const url = $apiInfo.basePath + '/roles/update';
        let result = await axiosPost(url, editData);
        if(result.error == null)
        {
            $roleMessages = {
                message: 'Update Success',
                error: 'Error'
            }
            goto('../role');
        }else
        {
            $roleMessages = {
                message: '',
                error: result.error
            }
        }
   };
</script>

<div class="container">
	<RoleEdit on:updateRole={updateRoleData}></RoleEdit>
</div>