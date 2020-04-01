<script>
import { createEventDispatcher } from 'svelte';
import { stores,goto } from '@sapper/app';
 import { fields } from '../../store';
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


<div class="card card-mpm1 mb-5">
   <div class="card-heading bg-blue-mpm p-3">
      <h3 class="text-white text-uppercase text-center">{$fields.employee.form.createTitle}</h3>
   </div>
   <div class="card-body p-5">
      <div class="row">
         <div class="col-6">
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.name}</label>
               <input type="text" class="form-control" id="text" placeholder={$fields.employee.placeholder.name} bind:value={employee.name} />
            </div> 
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.phoneNo} </label>
               <input type="phone"  class="form-control" id="text"   placeholder="{$fields.employee.placeholder.phoneNo}" bind:value={employee.phoneNo}/>
            </div>
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.personalEmail} </label>
               <input type="email" class="form-control" id="text" placeholder="{$fields.employee.placeholder.personalEmail}"  bind:value={employee.personalEmail} />
            </div>
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.township} </label>
               <input type="text" class="form-control" id="text" placeholder="{$fields.employee.placeholder.township}" bind:value={employee.township}   />
            </div>
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.address} </label>
               <input type="text" class="form-control" id="text" placeholder="{$fields.employee.placeholder.address}"  bind:value={employee.address} />
            </div>
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.dob} </label>
               <input type="date" class="form-control" placeholder="{$fields.employee.placeholder.dob}" bind:value={employee.dob}>
            </div>
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.maritalStatus} </label><br/>
               <label><input type=radio bind:group={employee.maritalStatus} value="Single" /> {$fields.employee.radiobtn.single}</label>
               <label><input type=radio bind:group={employee.maritalStatus} value="Married" /> {$fields.employee.radiobtn.married}</label>
            </div>
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.position} </label>
               <input type="text" class="form-control" id="text" placeholder="{$fields.employee.placeholder.position}" bind:value={employee.position} />
            </div>
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.nationality} </label>
               <input type="text" class="form-control" id="text" placeholder="{$fields.employee.placeholder.nationality}"  bind:value={employee.nationality} />
            </div>
         </div>
         <div class="col-6">
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.alias}</label>
               <input type="text" class="form-control" id="text" placeholder="{$fields.employee.placeholder.alias}" bind:value={employee.alias}/>
            </div>
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.nrcNo} </label>
               <input type="text" class="form-control" id="text" placeholder="{$fields.employee.placeholder.nrcNo}" bind:value={employee.nrcNo} />
            </div>
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.officialEmail} </label>
               <input type="email" class="form-control" id="text" placeholder="{$fields.employee.placeholder.officialEmail}" bind:value={employee.officialEmail}  />
            </div>
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.city} </label>
               <input type="text" class="form-control" id="text" placeholder="{$fields.employee.placeholder.city}" bind:value={employee.city} />
            </div>
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.postalCode} </label>
               <input type="text" class="form-control" id="text" placeholder="{$fields.employee.placeholder.postalCode}" bind:value={employee.postalCode} />
            </div>
            <div class="form-group mt-4">
               <label class="card-title">{$fields.employee.employee.gender} </label><br/>
               <!-- <input type="text" class="form-control" id="text" placeholder="Enter Gender" bind:value={employee.gender} /> -->
               <label><input type=radio bind:group={employee.gender} value="Male" /> {$fields.employee.radiobtn.male}</label>
               <label><input type=radio bind:group={employee.gender} value="Female" /> {$fields.employee.radiobtn.female}</label>
            </div>
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.employeeStatus} </label><br/>
               <!-- <input type="text" class="form-control" id="text" placeholder="Enter EmpStatus" bind:value={employee.employeeStatus}  /> -->
               <label><input type=radio bind:group={employee.employeeStatus} value="Active" /> {$fields.employee.radiobtn.active}</label>
               <label><input type=radio bind:group={employee.employeeStatus} value="Inactive" /> {$fields.employee.radiobtn.inactive}</label>
            </div>
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.basicSalary} </label>
               <input type="text" class="form-control" id="text" placeholder="{$fields.employee.placeholder.basicSalary}" bind:value={employee.basicSalary}  />
            </div>
            <div class="form-group">
               <label class="card-title">{$fields.employee.employee.race} </label>
               <input type="text" class="form-control" id="text" placeholder="{$fields.employee.placeholder.race}" bind:value={employee.race} />
            </div> 
         </div>
         <div class="col-md-12">
            <label  class="card-title">{$fields.employee.employee.photo}</label>                                               
               <!-- <div class="form-group">
                  <input type="file" id="file" accept="image/*" bind:files on:change={uploadImage} > 
               </div>  -->
               <div class="form-group">
                  <label for="profile-image" class="employee-file-upload"><i class="fas fa-cloud-upload-alt"></i>選択
                  <input type="file" id="profile-image" accept="image/*"  bind:files on:change={uploadImage} ></label>                           
               </div> 
               {#if src !=undefined}           
                  <div class="form-group">                  
                     <img {src} alt="" width={150} height={150} crossOrigin='anonymous' classes='profile-image'/>
                  </div> 
               {/if}                           
         </div> 
         <div class="col-md-12">
            <button type="button" class="btn btn-blue" on:click={CreateData}>{$fields.employee.form.save}</button>
            <a href="employee" class="btn btn-outline-orange">{$fields.employee.form.cancel}</a>  
         </div>  
      </div>                       
</div>
</div>
