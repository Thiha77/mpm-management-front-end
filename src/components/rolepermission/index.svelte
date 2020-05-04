<script>
    import { editRolePermission } from '../../stores/rolepermission/store.js';
    import RolePermissionSearch from './search.svelte';
    import Grouper from './grouper.svelte';
    import { createEventDispatcher } from 'svelte';
    import { fields } from '../../store';

    const dispatch = createEventDispatcher();
    export let rolePermissions;
    const destory = id => {
        dispatch('deleteRolePermission',{id:id});
    }

    const edit = (rolePermission) => {
        $editRolePermission = {
            id: rolePermission.id,
            roleId: rolePermission.roleId,
            permissionId: rolePermission.permissionId
        }
    }
    
    const deleteRolePermission = id => {
        dispatch('deleteRolePermission',{id:id});
    }
    
    const searchRolePermission = (event) => {
        let search = event.detail.search;
        dispatch('searchRolePermissionData',{search});
    }

    function groupForItem(rolePermission)
    {
		return rolePermission.Role['name']
    }

    const showPermission = (e) => {

		let className = "content "+e;
		let content = document.getElementsByClassName(className);
		for (let i = 0; i < content.length; i++) {
			if (content[i].style.display === "block") {
				content[i].style.display = "none";
			} else {
				content[i].style.display = "block";
			}
		}
    }

</script>
<style>

</style>
<section>
    <div class="container">
        <div class="row">
            <div class="col">
                <RolePermissionSearch on:searchRolePermission={searchRolePermission}></RolePermissionSearch>
                <div class="table-responsive-sm ">
                    <div class="table-wrapper">
                        <div class="table-title" id="demo">
                            <div class="row">
                                <div class="col-sm-6"><h3 class="float-left">{$fields.rolepermission.form.listTitle}</h3></div>
                                <div class="col-sm-6"><a class="btn btn-orange float-right" href='rolepermission/create'><i class="fas fa-plus-circle"></i> {$fields.rolepermission.form.addNew}</a></div>
                            </div>
                        </div>
                        <!-- <Grouper rolePermissions={rolePermissions} groupForItem={groupForItem}></Grouper> -->
                        <Grouper rolePermissions={rolePermissions} groupForItem={groupForItem} let:group let:rolePermission let:roleName let:id>
                            <button type="button" slot='group' class="collapsible" on:click={showPermission(group)}>{group}</button>
                            <ul slot='rolePermission' class="list-group content {roleName}">
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-sm-11">{rolePermission}</div>
                                        <div class="col-sm-1"><button class="btn btn-danger" on:click={deleteRolePermission(id)} title="Delete"><i class="far fa-trash-alt"></i></button></div>
                                    </div>
                                </li>
                            </ul>
                        </Grouper>
                    </div>
                </div>          
            </div>
        </div>
    </div>
</section>