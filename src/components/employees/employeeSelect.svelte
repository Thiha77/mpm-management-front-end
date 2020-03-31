<script>
    import { createEventDispatcher } from 'svelte';
    import { fields } from '../../stores/attendance/store';
    const dispatch = createEventDispatcher();
    export let employees;
    export let selectedEmployeeId;

    const changedEmployee = selectedEmployeeId => {
        dispatch("changedEmployee",{selectedEmployee:selectedEmployeeId});
    }
</script>
<style>
	
</style>
    <label for="name">{$fields.attendance.employeename}:</label>
    <div>
        {#if employees}
            <select class="form-control" bind:value={selectedEmployeeId} on:change={(changedEmployee(selectedEmployeeId))}>
                <option value="0">{$fields.placeholder.employeename}</option>
                {#each employees as employee}
                    <option value={employee.id}>{employee.name}</option>
                {/each}
            </select>
        {/if}
        <!-- <i class="fas fa-star-of-life req-icon"></i> -->
    </div>