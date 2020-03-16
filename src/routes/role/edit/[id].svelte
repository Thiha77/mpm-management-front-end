<script context="module">
    import { axiosGet } from '../../../util/api';
    import config from '../../../config';
	export async function preload({ params }) {
        
        let id = params.id;
        let urlRoleById = `${config.apiInfo.basePath}/roles/${id}`;
        let res = await axiosGet(urlRoleById);
		if (res.data) {
			return { role: res.data };
		}else{
            this.error(404, 'Not Found!');
        }
	}
</script>
<script>
    import RoleEdit from '../../../components/role/edit.svelte';
    import { axiosPost } from '../../../util/api.js'
    import { apiInfo } from '../../../store.js';
    import { editRoleData, roleMessages } from '../../../stores/role/store.js';
    import { goto } from '@sapper/app';
    import { Toast } from '../../../util/salert.js';
    export let role;
    const updateRoleData = async() => {
        
        const url = $apiInfo.basePath + '/roles/update';
        let result = await axiosPost(url, role);
        if(result.error == null)
        {
           Toast.fire(
                'Success!',
                'Role is successfully updated.',
                'success'
            )
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
	<RoleEdit {role} on:updateRole={updateRoleData}></RoleEdit>
</div>