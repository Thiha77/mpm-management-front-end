<script>
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
export let employee;
</script>
<style>
</style>
<div class="card">
    <h3> Employee Detail List </h3>
    <div class="card-body">         
         <div class="row ">
         <div class="col-md-12">
          <img src={'uploads/employee/images/'+ employee.photo} width={200} height={200} class="avatar img-thumbnail employee-photo" alt="Image"/>
         </div>       
            <div class="col-md-6">
               <strong class="card-title" >Employee Name :</strong>
               <!-- <input type="text" class="form-control" id="text" placeholder="Enter Name" bind:value={employee.name} /> -->
               <span>{employee.name}</span>
            </div>   
            <div class="col-md-6">
               <strong class="card-title">Name  :</strong>
               <span>{employee.alias}</span>
            </div> 
            
            <div class="col-md-6">
               <strong class="card-title">Phone No: </strong>
               <span>{employee.phoneNo}</span>
            </div>
            <div class="col-md-6">
               <strong class="card-title">NRC No : </strong>
               <span>{employee.nrcNo}</span>
            </div>
            <div class="col-md-6">
               <strong class="card-title">Personal Email : </strong>
               <span>{employee.personalEmail}</span>
            </div>
            <div class="col-md-6">
               <strong class="card-title">Official Mail : </strong>
               <span>{employee.officialEmail}</span>
            </div>
            <div class="col-md-6">
               <strong class="card-title">Township : </strong>
                <span>{employee.township}</span>
            </div>
             <div class="col-md-6">
               <strong class="card-title">City: </strong>
               <span>{employee.city}</span>
            </div>
             <div class="col-md-6">
               <strong class="card-title">Address: </strong>
               <span>{employee.address}</span>
            </div>
            <div class="col-md-6">
               <strong class="card-title">Postal Code: </strong>
               <span>{employee.postalCode}</span>
            </div>
            <div class="col-md-6">
               <strong class="card-title">Birthday : </strong>
               <span>{employee.dob}</span>
            </div>  
            <div class="col-md-6" >
               <strong class="card-title">Gender : </strong>
                <span>{employee.gender}</span>
            </div>
             <div class="col-md-6">
               <strong class="card-title">Position: </strong>
                <span>{employee.position}</span>
            </div>
            <div class="col-md-6">
               <strong class="card-title">Salary: </strong>
                <span>{employee.basicSalary}</span>
            </div>
              <div class="col-md-6" >
            <strong class="card-title">Marital Status: </strong>
             <span>{employee.maritalStatus}</span>
            </div>
             <div class="col-md-6">
             <strong class="card-title">Employee Status: </strong>
              <span>{employee.employeeStatus}</span>
            </div>
             <div class="col-md-6">
               <strong class="card-title">Nationality: </strong>
                <span>{employee.nationality}</span>
            </div>
             <div class="col-md-6">
               <strong class="card-title">Race: </strong>
                <span>{employee.race}</span>
            </div>              
            <div class="col-md-12 pt-3">
                  <a href="employee" class="btn btn-outline-warning">Cancel</a>
               </div>  
            
         </div>                       
    </div>
 </div>
  