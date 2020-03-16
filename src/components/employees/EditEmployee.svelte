<script>
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();

    export let employee;
    const updatebtn = () => {
        dispatch('update', { emp: employee,files: files})
    }

    const uploadImage= (e)=>{ 
      src =URL.createObjectURL(e.target.files[0]);
      //employee.photo=e.target.files;  
 }
let src =employee.photo;
let files;
</script> 
<div class="container">
   <div class="row">
      <div class="col mx-auto">
         <div class="card card-mpm1 mb-5">
             <div class="card-heading bg-blue-mpm p-3">
               <h3 class="text-white text-uppercase text-center">Employee Update Form</h3>
            </div>
            <div class="card-body p-5">
               <div class="row">
                  <div class="col-6">
                     <div class="form-group">
                        <label class="card-title">Employee Name :</label>
                        <input type="text" class="form-control" id="text" placeholder="Enter Name" bind:value={employee.name} />
                     </div>
                     <div class="form-group">
                        <label class="card-title">Phone No: </label>
                        <input type="phone" class="form-control" id="text" placeholder="Enter Phone Number" bind:value={employee.phoneNo}/>
                     </div>
                     <div class="form-group">
                        <label class="card-title">Personal Email : </label>
                        <input type="email" class="form-control" id="text" placeholder="Enter personal email"  bind:value={employee.personalEmail} />
                     </div>
                     <div class="form-group">
                        <label class="card-title">Township : </label>
                        <input type="text" class="form-control" id="text" placeholder="Enter Township" bind:value={employee.township}   />
                     </div>
                     <div class="form-group">
                        <label class="card-title">Address: </label>
                        <input type="text" class="form-control" id="text" placeholder="Enter Address"  bind:value={employee.address} />
                     </div>
                     <div class="form-group button-container">
                        <label class="card-title">Birthday : </label>
                        <input type="date" class="form-control"  bind:value={employee.dob}>
                     </div>
                     <div class="form-group">
                        <label class="card-title">Position: </label>
                        <input type="text" class="form-control" id="text" placeholder="Enter Position" bind:value={employee.position} />
                     </div>
                     <div class="form-group">
                        <label class="card-title">Nationality: </label>
                        <input type="text" class="form-control" id="text" placeholder="Enter Nationality"  bind:value={employee.nationality} />
                     </div>
                  </div>
                  <div class="col-6">
                     <div class="form-group">
                        <label class="card-title">Name  :</label>
                        <input type="text" class="form-control" id="text" placeholder="Enter Alias" bind:value={employee.alias}/>
                     </div>
                     <div class="form-group">
                        <label class="card-title">NRC No : </label>
                        <input type="text" class="form-control" id="text" placeholder="Enter NRC No" bind:value={employee.nrcNo} />
                     </div>
                     <div class="form-group">
                        <label class="card-title">Official Mail : </label>
                        <input type="email" class="form-control" id="text" placeholder="Enter official mail" bind:value={employee.officialEmail}  />
                     </div>
                     <div class="form-group">
                        <label class="card-title">City: </label>
                        <input type="text" class="form-control" id="text" placeholder="Enter Township" bind:value={employee.city} />
                     </div>
                     <div class="form-group">
                        <label class="card-title">Postal Code: </label>
                        <input type="text" class="form-control" id="text" placeholder="Enter Township" bind:value={employee.postalCode} />
                     </div>
                     <div class="row form-group clearfix mt-4">
                        <div class="col-4">
                           <label class="card-title">Gender : </label><br/>
                           <label><input type=radio bind:group={employee.gender} value="male" />Male</label>
                           <label><input type=radio bind:group={employee.gender} value="female" />Female</label>
                        </div>
                        <div class="col-4">
                              <label class="card-title">Marital Status: </label><br/>
                              <label><input type=radio bind:group={employee.maritalStatus} value="single" />Single</label>
                              <label><input type=radio bind:group={employee.maritalStatus} value="married" />Married</label>
                        </div>
                        <div class="col-4">
                              <label class="card-title">Employee Status: </label><br/>
                              <label><input type=radio bind:group={employee.employeeStatus} value="active" />Active</label>
                              <label><input type=radio bind:group={employee.employeeStatus} value="inactive" />Inactive</label>
                        </div>
                     </div>
                     <div class="form-group">
                        <label class="card-title">Salary: </label>
                        <input type="text" class="form-control" id="text" placeholder="Enter Salary" bind:value={employee.basicSalary}  />
                     </div>
                     <div class="form-group">
                        <label class="card-title">Race: </label>
                        <input type="text" class="form-control" id="text" placeholder="Enter Race" bind:value={employee.race} />
                     </div>      
                  </div>
                  <div class="col-md-12 pt-3">
                     <form >           
                        <div class="form-group pt-3">
                           <input type="file" id="file" accept="image/*" bind:files on:change={uploadImage} > 
                        </div>   
                        <div class="form-group pt-3">             
                              <img  {src} alt=""  width={150} height={150} crossOrigin='anonymous' class='profile-image' />
                        </div>      
                        <!-- <div class="form-group pt-3">             
                              <img  {src} alt=""  width={150} height={150} crossOrigin='anonymous' class='profile-image'/>
                        </div>                 -->
                     </form> 
                     <button type="button" class="btn btn-outline-success" on:click|preventDefault={updatebtn} >Update</button>
                     <a href="employee" class="btn btn-outline-warning">Cancel</a>
                  </div> 
               </div>
            </div>
         </div>
      </div>
   </div>
</div>



