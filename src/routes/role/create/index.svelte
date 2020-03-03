<script>
    import RoleCreate from '../../../components/role/create.svelte';
    import ApiPost from '../../../util/api.js'
    import RoleIndex from '../../../components/role/index.svelte';
    import { role } from '../../../stores/role/store.js';
    import * as sapper from '@sapper/app';
    
    let roleData = {
        id: null,
        name: "",
        description: ""
    };

    let url;
    let res;
    const saveRoleData = () => {
        url = "http://localhost:5000/roles/create";
        ApiPost(url,roleData).then( (data) => {
            if(data.error == null)
            {
                $role = {
                    createError: "",
                    createMessage: "Success"
                };
                sapper.goto("../role");
            }else
            {
                $role = {
                    createError: "Fail",
                    createMessage: ""
                };
            }; 
        });
        
    };
</script>

<div class="container">
    <h1>{$role.createError}</h1>
	<RoleCreate bind:name = {roleData.name} bind:description = {roleData.description} on:saveRole={saveRoleData}></RoleCreate>
</div>