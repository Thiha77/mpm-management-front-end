<script>
    export let attendances;
    import { fields } from '../../store';
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
<section>
    <div class="row">
        <div class="col">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-8">
                            <h2>{$fields.attendance.form.title}</h2>
                        </div>
                        <div class="col-sm-4">
                            <a class="btn btn-white float-right" href="attendance/create" ><i class="fas fa-plus-circle"></i>{$fields.attendance.form.new}</a>
                        </div>
                    </div>
                </div>
                <table class="table table-hover table-responsive-sm">
                    <thead>
                        <tr>
                            <th>{$fields.attendance.attendance.id}</th>						
                            <th>{$fields.attendance.attendance.employeeid}</th>
                            <th>{$fields.attendance.attendance.employeename}</th>
                            <th>{$fields.attendance.attendance.recordeddatetime}</th>
                            <th>{$fields.attendance.form.action}</th>
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
</section>