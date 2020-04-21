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
	
	const showPermission = (e) => {

        let coll = document.getElementsByClassName("collapsible");
		
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


<!-- {#each groupedItems as groupedItem}
    <slot name='group' group={groupedItem.group}/>
    {#each groupedItem.rolePermissions as rolePermission}
		<div class={rolePermission.Role['name']}>
			<slot name='rolePermission' rolePermission={rolePermission.Permission['name']} roleName={rolePermission.Role['name']}/>
		</div>
    {/each}
{/each} -->

{#each groupedItems as groupedItem}
	<button type="button" class="collapsible" on:click={showPermission(groupedItem.group)}>{groupedItem.group}</button>
	{#each groupedItem.rolePermissions as rolePermission}
		<div class="content {rolePermission.Role['name']}">
			<p>{rolePermission.Permission['name']}</p>
		</div>	
	{/each}
{/each}