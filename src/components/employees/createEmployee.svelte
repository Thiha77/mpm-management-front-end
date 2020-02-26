<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

function CancelBtn () {
    window.location="employee";
}
function CreateData() {
    dispatch('create', { emp : employee});
}

//export let employee;
//let gender ='male';
 let employee = {
            name: "",
            alias: "",
            phoneNo: "",
            nrcNo: "",
            personalEmail: "",
            officialEmail: "",
            township: "",
            city: "",
            address: "",
            postalCode: "",
            dob: "",
            gender: "male",
            position: "",
            basicSalary: "",
            nationality: "",
            race: "",
            maritalStatus: "single",
            employeeStatus: "active"
        };

// let married = 1;
// let empStatus =0;
//    export let name; 
//    export let alias;
//    export let phoneNo;
//    export let nrcNo;
//    export let personalEmail;
//    export let officialEmail;
//    export let township;
//    export let city;
//    export let address;
//    export let postalCode;
//    export let dob;
//    export let gender;
//    export let position;
//    export let basicSalary;
//    export let nationality;
//    export let race;
//    export let maritalStatus;
//    export let employeeStatus;
</script>
<style>
</style>
 <div class="card">
    <h3> EMPLOYEE APPLICATION FORM</h3>
    <div class="card-body">         
         <div class="row ">
            <div class="col-md-6">
               <strong class="card-title">Employee Name :</strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Name" bind:value={employee.name} />
            </div>                 
            <div class="col-md-6">
               <strong class="card-title">Name  :</strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Alias" bind:value={employee.alias}/>
            </div> 
            
            <div class="col-md-6">
               <strong class="card-title">Phone No: </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Phone Number" bind:value={employee.phoneNo}/>
            </div>
            <div class="col-md-6">
               <strong class="card-title">NRC No : </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter NRC No" bind:value={employee.nrcNo} />
            </div>
            <div class="col-md-6">
               <strong class="card-title">Personal Email : </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter personal email"  bind:value={employee.personalEmail} />
            </div>
            <div class="col-md-6">
               <strong class="card-title">Official Mail : </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter official mail" bind:value={employee.officialEmail}  />
            </div>
            <div class="col-md-6">
               <strong class="card-title">Township : </strong>
                <input type="text" class="form-control" id="text" placeholder="Enter Township" bind:value={employee.township}   />
            </div>
             <div class="col-md-6">
               <strong class="card-title">City: </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Township" bind:value={employee.city} />
            </div>
             <div class="col-md-6">
               <strong class="card-title">Address: </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Address"  bind:value={employee.address} />
            </div>
            <div class="col-md-6">
               <strong class="card-title">Postal Code: </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Township" bind:value={employee.postalCode} />
            </div>
            <div class="col-md-6">
               <strong class="card-title">Birthday : </strong>
               <input type="date" class="form-control"  bind:value={employee.dob}>
            </div>
            <div class="col-md-6" >
               <strong class="card-title">Gender : </strong><br/>
               <!-- <input type="text" class="form-control" id="text" placeholder="Enter Gender" bind:value={employee.gender} /> -->
                <label><input type=radio bind:group={employee.gender} value="male" />male</label>
                <label><input type=radio bind:group={employee.gender} value="female" />female</label>
            </div>
             <div class="col-md-6">
               <strong class="card-title">Position: </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Position" bind:value={employee.position} />
            </div>
            <div class="col-md-6">
               <strong class="card-title">Salary: </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Salary" bind:value={employee.basicSalary}  />
            </div>
             <div class="col-md-6" >
            <strong class="card-title">Marital Status: </strong><br/>
                <label><input type=radio bind:group={employee.maritalStatus} value="single" />single</label>
                <label><input type=radio bind:group={employee.maritalStatus} value="married" />married</label>
             <!-- <input type="text" class="form-control" id="text" placeholder="Enter EmpStatus" bind:value={employee.maritalStatus}  /> -->
              <!-- <label><input type=radio bind:group={married} value={1}>single</label>
              <label><input type=radio bind:group={married} value={2}>married</label> -->
            </div>
             <div class="col-md-6">
             <strong class="card-title">Employee Status: </strong><br/>
             <!-- <input type="text" class="form-control" id="text" placeholder="Enter EmpStatus" bind:value={employee.employeeStatus}  /> -->
                <label><input type=radio bind:group={employee.employeeStatus} value="active" />active</label>
                <label><input type=radio bind:group={employee.employeeStatus} value="inactive" />inactive</label>
            </div>
             <div class="col-md-6">
               <strong class="card-title">Nationality: </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Nationality"  bind:value={employee.nationality} />
            </div>
             <div class="col-md-6">
               <strong class="card-title">Race: </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter Race" bind:value={employee.race} />
            </div>  
             <div class="col-md-12 pt-3">
              <input type="file" accept="image/*"> 
            </div>                      
               <div class="col-md-12 pt-3">
                  <button type="button" class="btn btn-outline-success" on:click={CreateData}>Create</button>
                  <button type="submit" class="btn btn-outline-warning" on:click={CancelBtn}>Cancel</button>        
               </div>   
         </div>                       
    </div>
 
 
 
 </div>
