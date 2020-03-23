<script>
    export let attendances;
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    const edit = (attendance) => {
        dispatch('edit', {
            attendance: attendance
            
        })
    }
    const del = (id) => {
        dispatch('delete', {
            id: id
        });
    }
</script>

<div class="table-wrapper">
    <div class="table-title">
        <div class="row">
            <div class="col-sm-8">
                <h2>Attendance</h2>
            </div>
            <div class="col-sm-4">
                <a class="btn btn-primary float-right" href="attendance/create" >Add New Attendance</a>
            </div>
        </div>
    </div>

    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>ID</th>						
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Recorded Datetime</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {#if attendances}
                {#each attendances as attendance}   
                <tr>
                    <td>{attendance.id}</td>
                    <td>{attendance.employeeId}</td>
                    <td>{attendance.Employee['name']}</td>
                    <td>{attendance.recordedDateTime}</td>
                    <td>
                        <button class="btn btn-info" on:click={edit(attendance)}>Edit</button>
                        <button class="btn btn-danger" on:click={del(attendance.id)}>Delete</button>
                    </td>
                    </tr>
                {/each} 
                {:else}
                <tr>No Record Found!</tr>
            {/if}    
        </tbody>
    </table>

</div>