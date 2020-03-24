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
    import { stores,goto } from '@sapper/app';
    import { Toast } from '../../../util/salert.js';
    import { validate } from '../../../util/validator';
    import ValidationBox from '../../../components/util/ValidationBox.svelte';
    import enFields from '../../../languages/en/role.json';
    import jpFields from'../../../languages/jp/role.json';

    const { session } = stores();
    $: fields = $session.lan == 'en' ? enFields : jpFields;

    export let role;

    let vErrors;
    let constraints = {
        name: {
            presence: { allowEmpty: false }
        },
        description: {
            presence: { allowEmpty: false }
        }
    };

    const updateRoleData = async() => {
        
        const url = $apiInfo.basePath + '/roles/update';

        vErrors = validate(role, constraints);
        if(vErrors){
            return;
        }

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
    }
</script>

<div class="container">
    {#if vErrors}
        <ValidationBox {vErrors}></ValidationBox>
    {/if}
    {#if $session.lan && fields}
	    <RoleEdit {role} on:updateRole={updateRoleData} {fields}></RoleEdit>
    {/if}
</div>