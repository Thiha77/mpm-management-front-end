<script>
    import { editRolePermission } from '../../stores/rolepermission/store.js';
    import RolePermissionSearch from './search.svelte';
    import Grouper from './grouper.svelte';
    import Collapse from './collapse.svelte';
    import { createEventDispatcher } from 'svelte';
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
    };
    
    const searchRolePermission = (event) => {
        let search = event.detail.search;
        dispatch('searchRolePermissionData',{search});
    }

    function groupForItem(rolePermission)
    {
		return rolePermission.Role['name']
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
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-6"><h3 class="float-left">Role Permission List</h3></div>
                                <div class="col-sm-6"><a class="btn btn-orange float-right" href='rolepermission/create'><i class="fas fa-plus-circle"></i> Add New Role Permission</a></div>
                            </div>
                        </div>
                        <Grouper rolePermissions={rolePermissions} groupForItem={groupForItem} let:group let:rolePermission>
                            <div slot='group'>
                                <h2>{group}</h2>
                            </div>
                            <div slot='rolePermission'>
                                {rolePermission}
                            </div>
                        </Grouper>
                    </div>
                </div>
                <Collapse></Collapse>
                <!-- <div class="card" style="margin-top:20px;">
                    <div class="card-header" style="background:#0689CE;">
                         <div class="row">
                            <div class="col-sm-6"><h3 class="float-left" style="color:white;">Role Permission List</h3></div>
                            <div class="col-sm-6"><a class="btn btn-info float-right" href='rolepermission/create'><i class="fas fa-plus-circle"></i> Add New Role Permission</a></div>
                        </div>
                    </div>
                    <div class="card-body">
                       
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</section>