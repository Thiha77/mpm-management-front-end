<script>
export let employees;
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();

const editbtn=(employee) => {
    dispatch('edit', { emp : employee});

}
const deletebtn=(id) => {
    dispatch('delete', { id : id});

}
const detail=(employee) => {
    dispatch('list', { employee: employee});

}

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
<section>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="table-wrapper card-list-mpm1">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6"><h3 class="float-left">Employee List</h3></div>
                            <div class="col-sm-6"><a class="btn btn-info float-right" href='employee/create'><i class="fas fa-plus-circle"></i> Add New Employee</a></div>
                        </div>
                    </div>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Photo</th>						
                                <th>Phone</th>
                                <th>Official Email</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {#if employees}  
                            {#each employees as employee}   
                                <tr>
                                    <td><a href={'employee/view/' + employee.id} on:click={detail(employee)} ><img src={employee.photo} class="avatar img-thumbnail employee-photo" alt="Image"/>{employee.name}</td>
                                    <td>{employee.phoneNo}</td>
                                    <td>{employee.officialEmail}</td>
                                    <td>{employee.address}</td>
                                    <td>
                                        <button class="btn btn-info"  on:click={editbtn(employee)} title="Edit"><i class="fas fa-pen"></i></button>
                                        <button class="btn btn-danger" on:click={deletebtn(employee.id)} title="Delete"><i class="far fa-trash-alt"></i></button>
                                    </td>
                                    </tr>
                                {/each}                       
                            {:else}
                            <tr>No  Record Found!</tr>
                        {/if}   
                        </tbody>
                    </table>
                </div>
            </div>
        </div>   
    </div>  
</section>