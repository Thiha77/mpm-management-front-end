<script>

	// items is an array of items to group.
	export let rolePermissions;
	// groupForItem is a function that takes an item,
	// and returns which group it should be in.
	export let groupForItem = function (rolePermission) { 
		return 'Group name'
	}

	let groupedItems = null
	
	$: if (rolePermissions) {
		groupedItems = groupAll(rolePermissions)
	}
	
	function groupAll(rolePermissions) {
		const groupedItems = []
		let lastGroup = null
		let group = null
		rolePermissions.forEach((rolePermission) => {
            const itemGroup = groupForItem(rolePermission);
			if (lastGroup == null || lastGroup != itemGroup) {
				lastGroup = itemGroup
				group = {
					group: itemGroup,
					rolePermissions: []
                }
                groupedItems.push(group)
                console.log(groupedItems);
			}
			group.rolePermissions.push(rolePermission)
		})
		return groupedItems
	}
	
</script>

{#each groupedItems as groupedItem}
    <slot name='group' group={groupedItem.group}/>
    {#each groupedItem.rolePermissions as rolePermission}
        <slot name='rolePermission' rolePermission={rolePermission.Permission['name']}/>
    {/each}
{/each}
