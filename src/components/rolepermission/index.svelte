<script>
    import { editRolePermission } from '../../stores/rolepermission/store.js';
    import RolePermissionSearch from './search.svelte';
    import Grouper from './grouper.svelte';
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
                        <div class="table-title" id="demo">
                            <div class="row">
                                <div class="col-sm-6"><h3 class="float-left">Role Permission List</h3></div>
                                <div class="col-sm-6"><a class="btn btn-orange float-right" href='rolepermission/create'><i class="fas fa-plus-circle"></i> Add New Role Permission</a></div>
                            </div>
                        </div>
                        <Grouper rolePermissions={rolePermissions} groupForItem={groupForItem}></Grouper>
                        <!-- <Grouper rolePermissions={rolePermissions} groupForItem={groupForItem} let:group let:rolePermission let:roleName>
                            <div slot='group' class={group}>
                                <h2>{group}</h2>
                            </div>
                            <ul slot='rolePermission'>
                                <li>{rolePermission}</li>
                            </ul>
                        </Grouper> -->
                    </div>
                </div>          
            </div>
        </div>
    </div>
</section>