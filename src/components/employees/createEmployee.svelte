<script>
import { createEventDispatcher } from 'svelte';
import ImgEncoder from 'svelte-image-encoder';
const dispatch = createEventDispatcher();

let src ;
//let url;

const CreateData = () =>{
    dispatch('create', { emp : employee});

}
 const uploadImage= (e)=>{ 
    src =URL.createObjectURL(e.target.files[0]);
    employee.photo=e.target.files[0];
    console.log("test",employee.photo);
 }




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
            photo:"",
            maritalStatus: "single",
            employeeStatus: "active"
        };
        
	

	
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
               <input type="phone" class="form-control" id="text" placeholder="Enter Phone Number" bind:value={employee.phoneNo}/>
            </div>
            <div class="col-md-6">
               <strong class="card-title">NRC No : </strong>
               <input type="text" class="form-control" id="text" placeholder="Enter NRC No" bind:value={employee.nrcNo} />
            </div>
            <div class="col-md-6">
               <strong class="card-title">Personal Email : </strong>
               <input type="email" class="form-control" id="text" placeholder="Enter personal email"  bind:value={employee.personalEmail} />
            </div>
            <div class="col-md-6">
               <strong class="card-title">Official Mail : </strong>
               <input type="email" class="form-control" id="text" placeholder="Enter official mail" bind:value={employee.officialEmail}  />
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
            <div class="col-md-6 pt-3">
               <input type="file" id="upload" accept="image/*" on:change={uploadImage}> 
            </div>            
             <div class="col-md-6 pt-3">                  
                  <ImgEncoder {src} bind:value={employee.photo} width={150} height={150} crossOrigin='anonymous' classes='profile-image'/>
                  <!-- <img src={url} alt=''> -->
            </div>                      
               <div class="col-md-12 pt-5">
                  <button type="button" class="btn btn-outline-success" on:click={CreateData}>Create</button>
                  <a href="employee" class="btn btn-outline-warning">Cancel</a>
                  <!-- <button type="submit" class="btn btn-outline-warning" on:click={CancelBtn}>Cancel</button>         -->
               </div>   
         </div>                       
    </div>
 </div>
