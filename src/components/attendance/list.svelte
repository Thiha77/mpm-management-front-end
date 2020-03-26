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
<div class="row">
    <div class="col">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8">
                        <h2>Attendance List</h2>
                    </div>
                    <div class="col-sm-4">
                        <a class="btn btn-white float-right" href="attendance/create" ><i class="fas fa-plus-circle"></i> Add New Attendance</a>
                    </div>
                </div>
            </div>
            <table class="table table-hover table-responsive-sm">
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
                                <button class="btn btn-blue" on:click={edit(attendance)} title="Edit"><i class="fas fa-pen"></i></button>
                                <button class="btn btn-danger" on:click={del(attendance.id)} title="Delte"><i class="far fa-trash-alt"></i></button>
                            </td>
                            </tr>
                        {/each} 
                        {:else}
                        <tr>No Record Found!</tr>
                    {/if}    
                </tbody>
            </table>

        </div>
    </div>
</div>

