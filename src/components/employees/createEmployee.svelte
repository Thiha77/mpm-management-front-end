<script>
import { createEventDispatcher } from 'svelte';
import { stores,goto } from '@sapper/app';
import { fields } from '../../stores/employee/store';
const dispatch = createEventDispatcher();
//export let fields;

const CreateData = () =>{
   dispatch('create', { files: files, emp:employee});
}
 const uploadImage= (e)=>{ 
   src =URL.createObjectURL(e.target.files[0]);      
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
let src;
let files;

</script>
<div class="container">
   <div class="row">
      <div class="col mx-auto">
         <div class="card card-mpm1 mb-5">
            <div class="card-heading bg-blue-mpm p-3">
               <h3 class="text-white text-uppercase text-center">{$fields.form.createTitle}</h3>
            </div>
            <div class="card-body p-5">
               <div class="row">
                  <div class="col-6">
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.name}</label>
                        <input type="text" class="form-control" id="text" placeholder={$fields.placeholder.name} bind:value={employee.name} />
                     </div> 
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.phoneNo} </label>
                        <input type="phone"  class="form-control" id="text"   placeholder="{$fields.placeholder.phoneNo}" bind:value={employee.phoneNo}/>
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.personalEmail} </label>
                        <input type="email" class="form-control" id="text" placeholder="{$fields.placeholder.personalEmail}"  bind:value={employee.personalEmail} />
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.township} </label>
                        <input type="text" class="form-control" id="text" placeholder="{$fields.placeholder.township}" bind:value={employee.township}   />
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.address} </label>
                        <input type="text" class="form-control" id="text" placeholder="{$fields.placeholder.address}"  bind:value={employee.address} />
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.dob} </label>
                        <input type="date" class="form-control" placeholder="{$fields.placeholder.dob}" bind:value={employee.dob}>
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.position} </label>
                        <input type="text" class="form-control" id="text" placeholder="{$fields.placeholder.position}" bind:value={employee.position} />
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.nationality} </label>
                        <input type="text" class="form-control" id="text" placeholder="{$fields.placeholder.nationality}"  bind:value={employee.nationality} />
                     </div>
                  </div>
                  <div class="col-6">
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.alias}</label>
                        <input type="text" class="form-control" id="text" placeholder="{$fields.placeholder.alias}" bind:value={employee.alias}/>
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.nrcNo} </label>
                        <input type="text" class="form-control" id="text" placeholder="{$fields.placeholder.nrcNo}" bind:value={employee.nrcNo} />
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.officialEmail} </label>
                        <input type="email" class="form-control" id="text" placeholder="{$fields.placeholder.officialEmail}" bind:value={employee.officialEmail}  />
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.city} </label>
                        <input type="text" class="form-control" id="text" placeholder="{$fields.placeholder.city}" bind:value={employee.city} />
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.postalCode} </label>
                        <input type="text" class="form-control" id="text" placeholder="{$fields.placeholder.postalCode}" bind:value={employee.postalCode} />
                     </div>
                     <div class="row form-group clearfix mt-4">
                        <div class="col-4">
                           <label class="card-title">{$fields.employee.gender} </label><br/>
                           <!-- <input type="text" class="form-control" id="text" placeholder="Enter Gender" bind:value={employee.gender} /> -->
                           <label><input type=radio bind:group={employee.gender} value="Male" /> {$fields.radiobtn.male}</label>
                           <label><input type=radio bind:group={employee.gender} value="Female" /> {$fields.radiobtn.female}</label>
                        </div>
                        <div class="col-4">
                           <label class="card-title">{$fields.employee.maritalStatus} </label><br/>
                           <label><input type=radio bind:group={employee.maritalStatus} value="Single" /> {$fields.radiobtn.single}</label>
                           <label><input type=radio bind:group={employee.maritalStatus} value="Married" /> {$fields.radiobtn.married}</label>
                        </div>
                        <div class="col-4">
                           <label class="card-title">{$fields.employee.employeeStatus} </label><br/>
                           <!-- <input type="text" class="form-control" id="text" placeholder="Enter EmpStatus" bind:value={employee.employeeStatus}  /> -->
                           <label><input type=radio bind:group={employee.employeeStatus} value="Active" /> {$fields.radiobtn.active}</label>
                           <label><input type=radio bind:group={employee.employeeStatus} value="Inactive" /> {$fields.radiobtn.inactive}</label>
                        </div>
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.basicSalary} </label>
                        <input type="text" class="form-control" id="text" placeholder="{$fields.placeholder.basicSalary}" bind:value={employee.basicSalary}  />
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.race} </label>
                        <input type="text" class="form-control" id="text" placeholder="{$fields.placeholder.race}" bind:value={employee.race} />
                     </div> 
                  </div>
                  <div class="col-md-12">
                    <label  class="card-title">{$fields.employee.photo}</label>                                               
                        <div class="form-group">
                           <input type="file" id="file" accept="image/*" bind:files on:change={uploadImage} > 
                        </div> 
                        {#if src !=undefined}           
                           <div class="form-group">                  
                              <img {src} alt="" width={150} height={150} crossOrigin='anonymous' classes='profile-image'/>
                           </div> 
                        {/if}                           
                  </div> 
                  <div class="col-md-12">
                     <button type="button" class="btn btn-blue" on:click={CreateData}>{$fields.form.save}</button>
                     <a href="employee" class="btn btn-outline-orange">{$fields.form.cancel}</a>  
                  </div>  
               </div>                       
         </div>
         </div>
      </div>
   </div>
</div>
