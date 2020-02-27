<script>
export let employees;
import ApiPost from '../../util/api.js';
import { empEditemployee } from "../../store.js";
// import  CreatedEmp from '../../components/employees/CreateEmployee.svelte';
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();

let deletebtn = id => {
       if(confirm("Are you sure?")){
            const url= "http://localhost:5000/employees/delete";
            const body ={
                id:id
         }
         ApiPost(url,body);
         employees = employees.filter(a => a.id !== id);
       };                
    };
// let editbtn=(employee)=>{
//     dispatch('edit',employee);

// }
let editbtn = (employee) => {
    $empEditemployee = {
        id: employee.id,
        name: employee.name,
        alias: employee.alias,
        phoneNo: employee.phoneNo,
        nrcNo: employee.nrcNo,
        personalEmail: employee.personalEmail,
        officialEmail:employee.officialEmail,
        township:employee.township,
        city: employee.city,
        address: employee.address,
        postalCode: employee.postalCode,
        dob:employee.dob,
        gender: employee.gender,
        position:employee.position,
        basicSalary: employee.basicSalary,
        nationality:employee.nationality,
        race: employee.race,
        maritalStatus:employee.maritalStatus,
        employeeStatus:employee.employeeStatus
    }
};


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
<div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8">
						<h2>Employee <b>Management</b></h2>
					</div>
					<div class="col-sm-4">
                        <a class="btn btn-primary float-right" href="employee/create" >Add New Employee</a>
						<!-- <button  class="btn btn-primary float-right" on:click={createForm}>Add New Employee</button>					 -->
					</div>
                </div>
            </div>
            <table class="table table-striped table-hover">
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
                {#if employees.length ===0}
                    <tr>No  Record Found!</tr>
                 {:else}
                 {#each employees as employee}   
                    <tr>
                        <td><a href="test"><img src="great-success.png"  class="avatar img-thumbnail employee-photo" alt="background image"/>{employee.name}</td>
                        <td>{employee.phoneNo}</td>
                        <td>{employee.officialEmail}</td>
                        <td>{employee.address}</td>
						<td>
						    <a class="btn btn-info" href="employee/edit" on:click={editbtn(employee)}>Edit</a>
                            <button class="btn btn-danger" on:click={deletebtn(employee.id)}>Delete</button>
                        </td>
                        </tr>
                     {/each} 
                    {/if}   
                </tbody>
            </table>
        </div>
    </div>  