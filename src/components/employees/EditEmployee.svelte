<script>
import { createEventDispatcher } from "svelte";
import { fields } from '../../stores/employee/store';
const dispatch = createEventDispatcher();

    export let employee;
    let files; 
    let src =employee.photo;
    const updatebtn = () => {
        dispatch('update', { emp: employee,files: files})
    }

    const uploadImage= (e)=>{ 
      src =URL.createObjectURL(e.target.files[0]);
      //employee.photo=e.target.files;  
   }
  const deleteImage = (src) => {
     var image_x = document.getElementById('x_image');
      image_x.parentNode.removeChild(image_x);
  }
 

</script> 
<div class="container">
   <div class="row">
      <div class="col mx-auto">
         <div class="card card-mpm1 mb-5">
             <div class="card-heading bg-blue-mpm p-3">
               <h3 class="text-white text-uppercase text-center">{$fields.form.editTitle}</h3>
            </div>
            <div class="card-body p-5">
               <div class="row">
                  <div class="col-6">
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.name}</label>
                        <input type="text" class="form-control" id="text" placeholder="{$fields.placeholder.name}" bind:value={employee.name} />
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.phoneNo} </label>
                        <input type="phone" class="form-control" id="text" placeholder="{$fields.placeholder.phoneNo}" bind:value={employee.phoneNo}/>
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
                     <div class="form-group button-container">
                        <label class="card-title">{$fields.employee.dob} </label>
                        <input type="date" class="form-control"  bind:value={employee.dob}>
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.position} </label>
                        <input type="text" class="form-control" id="text" placeholder="{$fields.placeholder.position}" bind:value={employee.position} />
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.nationality}</label>
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
                           <label><input type=radio bind:group={employee.gender} value="male" />{$fields.radiobtn.male}</label>
                           <label><input type=radio bind:group={employee.gender} value="female" />{$fields.radiobtn.female}</label>
                        </div>
                        <div class="col-4">
                              <label class="card-title">{$fields.employee.maritalStatus} </label><br/>
                              <label><input type=radio bind:group={employee.maritalStatus} value="single" />{$fields.radiobtn.single}</label>
                              <label><input type=radio bind:group={employee.maritalStatus} value="married" />{$fields.radiobtn.married}</label>
                        </div>
                        <div class="col-4">
                              <label class="card-title">{$fields.employee.employeeStatus} </label><br/>
                              <label><input type=radio bind:group={employee.employeeStatus} value="active" />{$fields.radiobtn.active}</label>
                              <label><input type=radio bind:group={employee.employeeStatus} value="inactive" />{$fields.radiobtn.inactive}</label>
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
                  <div class="col-md-12 pt-3">          
                      <label  class="card-title">{$fields.employee.photo}</label> 
                        <div class="form-group pt-3">                        
                           <input type="file" id="file" accept="image/*" bind:files on:change={uploadImage} > 
                        </div> 
                     {#if src ==''}                      
                       <div class="form-group pt-3">               
                           <img  src="noimage.jpg" alt=""  width={150} height={150} crossOrigin='anonymous' class='profile-image' />
                        </div>
                     {:else}
                        <div class="form-group pt-3" id="x_image">   
                            <span class='img-close-btn' on:click={deleteImage(employee.photo)} >X</span>          
                            <img  {src} alt=""  width={150} height={150} crossOrigin='anonymous' class='profile-image' />
                        </div>
                     {/if}                                                                  
                  </div> 
                   <div class="col-md-12">
                      <button type="button" class="btn btn-blue" on:click|preventDefault={updatebtn} >{$fields.form.save}</button>
                     <a href="employee" class="btn btn-outline-orange">{$fields.form.cancel}</a> 
                  </div> 
               </div>
            </div>
         </div>
      </div>
   </div>
</div>



