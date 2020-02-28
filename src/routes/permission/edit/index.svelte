<script>
    import PerEdit from '../../../components/permission/edit.svelte';
    import ApiPost from '../../../util/api.js'
    import { editPerData } from '../../../stores/permission/store.js';
    import * as sapper from '@sapper/app';
    
    const updatePerData = () => {
        let uptData = {
            id: $editPerData.id,
            name: $editPerData.name
        };
        let url = "http://localhost:5000/permissions/update";
        ApiPost(url,uptData).then( (data) => {
            if(data.error == null)
            {
               alert("Update Success");
            } 
        });
    };
    
</script>

<div class="container">
	<PerEdit on:updatePer={updatePerData}></PerEdit>
</div>