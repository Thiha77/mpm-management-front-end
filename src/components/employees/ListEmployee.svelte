<script>
//export let fields;
export let employees;
import { createEventDispatcher } from "svelte";
import { fields } from '../../store';
const dispatch = createEventDispatcher();

const editbtn=(employee) => {
    dispatch('edit', { emp : employee});

}
const deletebtn=(id) => {
    dispatch('delete', { id : id});

}
// const detail=(employee) => {
//     dispatch('list', { employee: employee});

// }

</script>
<style>
table.table .avatar {
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
	}
.employee-photo{
    width:70px;
    height:70px;
}
table.table td a {
    font-weight: bold;
    color: #566787;
    display: inline-block;
    text-decoration: none;
}
 table.table tr th, table.table tr td {
    border-color: #e9e9e9;
    padding: 12px 15px;
    vertical-align: middle;
}
table.table td a {
    font-weight: bold;
    color: #566787;
    display: inline-block;
    text-decoration: none;
}
</style>
<div class="row">
    <div class="col">
        <div class="table-wrapper card-list-mpm1">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6"><h3 class="float-left">{$fields.employee.form.listTitle}</h3></div>
                    <div class="col-sm-6"><a class="btn btn-white float-right" href='employee/create'><i class="fas fa-plus-circle"></i> {$fields.employee.form.listbtn}</a></div>
                </div>
            </div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>{$fields.employee.employee.photo}</th>						
                        <th>{$fields.employee.employee.phoneNo}</th>
                        <th>{$fields.employee.employee.officialEmail}</th>
                        <th>{$fields.employee.employee.address}</th>
                        <th>{$fields.employee.form.action}</th>
                    </tr>
                </thead>
                <tbody>
                {#if employees.length===0}  
                <span> No Employee Record Data</span>
                    {:else}
                    {#each employees as employee}   
                        <tr>
                            {#if employee.photo}
                                <td><a href={'employee/view/' + employee.id} ><img src={employee.photo} class="avatar img-thumbnail employee-photo" alt=""/>{employee.name}</td>
                            {:else}
                                    <td><a href={'employee/view/' + employee.id} ><img src="noimage.jpg" class="avatar img-thumbnail employee-photo" alt=""/>{employee.name}</td>
                            {/if}

                            <td>{employee.phoneNo}</td>
                            <td>{employee.officialEmail}</td>
                            <td>{employee.address}</td>
                            <td>
                                <button class="btn btn-blue"  on:click={editbtn(employee)} title={$fields.employee.title.editBtnTitle}><i class="fas fa-pen"></i></button>
                                <button class="btn btn-danger" on:click={deletebtn(employee.id)} title={$fields.employee.title.deleteBtnTitle}><i class="far fa-trash-alt"></i></button>
                            </td>
                            </tr>
                        {/each}                                                 
                {/if}   
                </tbody>
            </table>
        </div>
    </div>
</div>   
