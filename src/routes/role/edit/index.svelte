<script>
    import RoleEdit from '../../../components/role/edit.svelte';
    import ApiPost from '../../../util/api.js'
    import { editRoleData } from '../../../stores/role/store.js';
    import * as sapper from '@sapper/app';
    
   const updateRoleData = () => {
       let editData = {
           id: $editRoleData.id,
           name: $editRoleData.name,
           description: $editRoleData.description
           
       };
       let url = "http://localhost:5000/roles/update";
       ApiPost(url,editData).then( (data) => {
            if(data.error == null)
            {
               alert("Update Success");
            } 
        });
   };
</script>

<div class="container">
	<RoleEdit on:updateRole={updateRoleData}></RoleEdit>
</div>