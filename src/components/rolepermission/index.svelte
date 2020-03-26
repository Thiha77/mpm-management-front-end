<script>
    import { editRolePermission } from '../../stores/rolepermission/store.js';
    import RolePermissionSearch from './search.svelte';
    import Grouper from './grouper.svelte';
    import Collapse from './collapse.svelte';
    import { createEventDispatcher } from 'svelte';
    import { collapse } from '../../store';
    import { fly,fade,slide  } from 'svelte/transition';

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
                        <!-- <Collapse rolePermissions={rolePermissions}></Collapse> -->
                        <div class="accordion" id="accordionExample">
                            
                                <Grouper rolePermissions={rolePermissions} groupForItem={groupForItem} let:group let:rolePermission>
                                    
                                        <!-- <div slot='group'> -->
                                        
                                            <!-- <h2>{group}</h2> -->
                                            <div class="card-header" id={group} slot="group" >
                                                <h2 class="mb-0">
                                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={`#${group}`} aria-expanded="true" aria-controls={group}>
                                                    {group}
                                                    </button>
                                                </h2>
                                            </div>
                                        <!-- </div> -->
                                        <!-- <div slot='rolePermission'> -->
                                            <!-- {rolePermission} -->
                                            <!-- {#if $collapse.headingOne} -->
                                                <div  id={group} class="collapse" in:slide="{{ y:0  }}" out:slide="{{ y:0 }}" aria-labelledby={group} data-parent="#accordionExample" >
                                                    <div class="card-body">
                                                        {rolePermission}
                                                    </div>
                                                </div>
                                            <!-- {/if} -->
                                            
                                        <!-- </div> -->
                                    
                                </Grouper>
                            
                        </div>
                    </div>
                </div>
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