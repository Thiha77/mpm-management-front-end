<script>
    import RoleCreate from '../../../components/role/create.svelte';
    import { axiosPost } from '../../../util/api';
    import RoleIndex from '../../../components/role/index.svelte';
    import { roleMessages } from '../../../stores/role/store.js';
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
        description: {
            presence: { allowEmpty: false }
        }
    };

    let roleData = {
        id: null,
        name: "",
        description: ""
    };

    const saveRoleData = async() => {
        const url = $apiInfo.basePath + '/roles/create';

        vErrors = validate(roleData, constraints);
        if(vErrors){
            return;
        }  

        let result = await axiosPost(url, roleData);
        if(result.error == null){
            Toast.fire(
                'Success!',
                'New Role is successfully created.',
                'success'
            )
            goto('../role');
        }else{
            $roleMessages = {
                    message: '',
                    error: result.error
                }
        }
    };
</script>

<div class="container">
    {#if $roleMessages.error}
        <h1>{ $roleMessages.error }</h1>
    {/if}
    {#if vErrors}
        <ValidationBox {vErrors}></ValidationBox>
    {/if}
	<RoleCreate bind:name = {roleData.name} bind:description = {roleData.description} on:saveRole={saveRoleData}></RoleCreate>
</div>