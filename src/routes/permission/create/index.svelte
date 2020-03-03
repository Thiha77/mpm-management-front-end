<script>
    import PerCreate from '../../../components/permission/create.svelte';
    import ApiPost from '../../../util/api.js'
    import { permission } from '../../../stores/permission/store.js';
    import * as sapper from '@sapper/app';
    
    let perData = {
        name: "",
        specialPer: false
    };

    const savePerData = () => {
        let url = "http://localhost:5000/permissions/create";
        ApiPost(url,perData).then( (data) => {
            if(data.error == null)
            {
                $permission = {
                    createError: "",
                    createMessage: "Success"
                };
                sapper.goto("../permission");
            }else
            {
                $permission = {
                    createError: "Fail",
                    createMessage: ""
                };
            }; 
        });
    };
</script>

<div class="container">
	<PerCreate bind:name={perData.name} bind:specialPer={perData.specialPer} on:savePer={savePerData}></PerCreate>
</div>