<script>
import { empEditemployee } from "../../stores/employee/store.js";
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
    
    function updatebtn(){
        dispatch('update');
    }
</script>
<style>
</style>
 <div class="card">
    <h3> EMPLOYEE APPLICATION FORM</h3>
    <div class="card-body">         
         <div class="row ">
            <div class="col-md-6">
               <strong class="card-title">Employee Name :</strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Name" bind:value={$empEditemployee.name} />
            </div>                 
            <div class="col-md-6">
               <strong class="card-title">Name  :</strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Alias" bind:value={$empEditemployee.alias}/>
            </div> 
            
            <div class="col-md-6">
               <strong class="card-title">Phone No: </strong>
               <input type="phone" class="form-control" id="text" placeholder="Enter Phone Number" bind:value={$empEditemployee.phoneNo}/>
            </div>
            <div class="col-md-6">
               <strong class="card-title">NRC No : </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter NRC No" bind:value={$empEditemployee.nrcNo} />
            </div>
            <div class="col-md-6">
               <strong class="card-title">Personal Email : </strong>
               <input type="email" class="form-control" id="text" placeholder="Enter personal email"  bind:value={$empEditemployee.personalEmail} />
            </div>
            <div class="col-md-6">
               <strong class="card-title">Official Mail : </strong>
               <input type="email" class="form-control" id="text" placeholder="Enter official mail" bind:value={$empEditemployee.officialEmail}  />
            </div>
            <div class="col-md-6">
               <strong class="card-title">Township : </strong>
                <input type="text" class="form-control" id="text" placeholder="Enter Township" bind:value={$empEditemployee.township}   />
            </div>
             <div class="col-md-6">
               <strong class="card-title">City: </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Township" bind:value={$empEditemployee.city} />
            </div>
             <div class="col-md-6">
               <strong class="card-title">Address: </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Address"  bind:value={$empEditemployee.address} />
            </div>
            <div class="col-md-6">
               <strong class="card-title">Postal Code: </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Township" bind:value={$empEditemployee.postalCode} />
            </div>
            <div class="col-md-6">
               <strong class="card-title">Birthday : </strong>
               <input type="date" class="form-control"  bind:value={$empEditemployee.dob}>
            </div>
            <div class="col-md-6" >
               <strong class="card-title">Gender : </strong><br/>
               <!-- <input type="text" class="form-control" id="text" placeholder="Enter Gender" bind:value={employee.gender} /> -->
                <label><input type=radio bind:group={$empEditemployee.gender} value="male" />male</label>
                <label><input type=radio bind:group={$empEditemployee.gender} value="female" />female</label>
            </div>
             <div class="col-md-6">
               <strong class="card-title">Position: </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Position" bind:value={$empEditemployee.position} />
            </div>
            <div class="col-md-6">
               <strong class="card-title">Salary: </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Salary" bind:value={$empEditemployee.basicSalary}  />
            </div>
             <div class="col-md-6" >
            <strong class="card-title">Marital Status: </strong><br/>
                <label><input type=radio bind:group={$empEditemployee.maritalStatus} value="single" />single</label>
                <label><input type=radio bind:group={$empEditemployee.maritalStatus} value="married" />married</label>
             <!-- <input type="text" class="form-control" id="text" placeholder="Enter EmpStatus" bind:value={employee.maritalStatus}  /> -->
              <!-- <label><input type=radio bind:group={married} value={1}>single</label>
              <label><input type=radio bind:group={married} value={2}>married</label> -->
            </div>
             <div class="col-md-6">
             <strong class="card-title">Employee Status: </strong><br/>
             <!-- <input type="text" class="form-control" id="text" placeholder="Enter EmpStatus" bind:value={employee.employeeStatus}  /> -->
                <label><input type=radio bind:group={$empEditemployee.employeeStatus} value="active" />active</label>
                <label><input type=radio bind:group={$empEditemployee.employeeStatus} value="inactive" />inactive</label>
            </div>
             <div class="col-md-6">
               <strong class="card-title">Nationality: </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Nationality"  bind:value={$empEditemployee.nationality} />
            </div>
             <div class="col-md-6">
               <strong class="card-title">Race: </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Race" bind:value={$empEditemployee.race} />
            </div>  
             <div class="col-md-12 pt-3">
              <input type="file" accept="image/*"> 
            </div>                      
               <div class="col-md-12 pt-3">
                  <button type="button" class="btn btn-outline-success" on:click|preventDefault={updatebtn} >Update</button>
                  <a href="employee" class="btn btn-outline-warning">Cancel</a>
                  <!-- <button type="submit" class="btn btn-outline-warning" on:click={CancelBtn}>Cancel</button>         -->
               </div>   
         </div>                       
    </div>
 </div>
