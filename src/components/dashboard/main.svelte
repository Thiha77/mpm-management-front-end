<script>
	import Card from './card.svelte';
</script>
<div class="row">
	<div class="col-lg-3">
		<div class="col-lg-6">
			<Card>
				<span slot="title">User</span>
				<span slot="text">Manage User</span>
				<span slot="link">
					<a href="/user" class="btn btn-primary">Manage</a>
				</span>
			</Card>
		</div>
		<div class="col-lg-6">
			<Card>
				<span slot="title">Attendance</span>
				<span slot="text">Manage Attendance</span>
				<span slot="link">
					<a href="/attendance" class="btn btn-primary">Manage</a>
				</span>
			</Card>
		</div>
	</div>

	<div class="col-lg-3">
		<div class="col-lg-6">
			<Card>
				<span slot="title">Role</span>
				<span slot="text">Manage Role</span>
				<span slot="link">
					<a href="/role" class="btn btn-primary">Manage</a>
				</span>
			</Card>
		</div>
		<div class="col-lg-6">
			<Card>
				<span slot="title">Permission</span>
				<span slot="text">Manage Permission</span>
				<span slot="link">
					<a href="/permission" class="btn btn-primary">Manage</a>
				</span>
			</Card>
		</div>
	</div>

	<div class="col-lg-3">
		<div class="col-lg-6">
			<Card>
				<span slot="title">Role Permission</span>
				<span slot="text">Manage Role Permission</span>
				<span slot="link">
					<a href="/rolepermission" class="btn btn-primary">Manage</a>
				</span>
			</Card>
		</div>
		<div class="col-lg-6">
			<Card>
				<span slot="title">Employee</span>
				<span slot="text">Manage Employee</span>
				<span slot="link">
					<a href="/employee" class="btn btn-primary">Manage</a>
				</span>
			</Card>
		</div>
	</div>

	<div class="col-lg-3">
		<div class="col-lg-6">
			<Card>
				<span slot="title">Notice</span>
				<span slot="text">Manage Notice</span>
				<span slot="link">
					<a href="/notice" class="btn btn-primary">Manage</a>
				</span>
			</Card>
		</div>
		<div class="col-lg-6">
			<!-- <Card>
				<span slot="title">Permission</span>
				<span slot="text">Manager Permission</span>
				<span slot="link">
					<a href="/user" class="btn btn-primary">Manage</a>
				</span>
			</Card> -->
		</div>
	</div>

</div>