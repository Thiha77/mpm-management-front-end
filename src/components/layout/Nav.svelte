<script>
	// export let segment;
	import Sidebar from '../layout/mpm/Sidebar.svelte';
	// let sidebar_show = true;
</script>

<style>
	/* nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	} 
	 ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	} */
</style>

<!-- <nav>
	<ul>
		<li><a class:selected='{segment === undefined}' href='.'>home</a></li>
		<li><a class:selected='{segment === "about"}' href='about'>about</a></li>
		<li><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>blog</a></li>
		<li><a href='admin' class:selected={segment === 'admin'}>Admin</a></li>
		<li><a href='user' class:selected={segment === 'user'}>User</a></li>
		<!-- <li><a href='employee' class:selected={segment === 'employee'}>Employee</a></li> -->
		<!-- <li><a href='role' class:selected={segment === 'role'}>Role</a></li>
		<li><a href='permission' class:selected={segment === 'permission'}>Permission</a></li>
		<li><a href='rolepermission' class:selected={segment === 'rolepermission'}>RolePermission</a></li>
		<li><a href='employee' class:selected={segment === 'employee'}>Employee</a></li>
		<li><a href="notice" class:selected={segment === 'notice'}>Notice</a></li>
	</ul>
</nav> -->
<Sidebar></Sidebar>
