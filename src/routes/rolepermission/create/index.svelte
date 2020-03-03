<script>
    import RolePerCreate from '../../../components/rolepermission/create.svelte';
    import ApiGetRole from '../../../components/util/Api.svelte';
	import ApiGetPermission from '../../../components/util/Api.svelte';
	
</script>

<div class="container">
	<RolePerCreate></RolePerCreate>
   <!-- <ApiGetRole url = "http://localhost:5000/roles" method="get" let:data let:loading let:error>
		{#if data}
			<RolePerCreate roles={data}></RolePerCreate>
		{/if}
	</ApiGetRole> -->
	<!-- <ApiGetPermission url = "http://localhost:5000/permissions" method="get" let:data let:loading let:error>
		{#if data}
			<RolePerCreate permissions={data}></RolePerCreate>
		{/if}
	</ApiGetPermission> -->
</div>