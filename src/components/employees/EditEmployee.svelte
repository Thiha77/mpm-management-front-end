<script>
import { createEventDispatcher } from "svelte";
//import { fields } from '../../stores/employee/store';
import { fields } from '../../store';
const dispatch = createEventDispatcher();

    export let employee;
    let files; 
    let src =employee.photo;
    let delImamge=false;
    const updatebtn = () => {
        employee = { ...employee,  delImamge: delImamge};
        dispatch('update', { emp: employee,files: files})
    }
  
  const deleteImage = () => {    
      // var image_x = document.getElementById('x_image');    
      // image_x.parentNode.removeChild(image_x);
      var image_x = document.getElementById("imgPreview").src = "";
      delImamge =true;

  }
  const uploadImage= (e)=>{ 
      src =URL.createObjectURL(e.target.files[0]);
      delImamge=false;
   }
 

</script> 
<div class="container">
   <div class="row">
      <div class="col mx-auto">
         <div class="card card-mpm1 mb-5">
             <div class="card-heading bg-blue-mpm p-3">
               <h3 class="text-white text-uppercase text-center">{$fields.employee.form.editTitle}</h3>
            </div>
            <div class="card-body p-5">
               <div class="row">
                  <div class="col-6">
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.employee.name}</label>
                        <input type="text" class="form-control" id="text" placeholder="{$fields.employee.placeholder.name}" bind:value={employee.name} />
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.employee.phoneNo} </label>
                        <input type="phone" class="form-control" id="text" placeholder="{$fields.employee.placeholder.phoneNo}" bind:value={employee.phoneNo}/>
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
                     <div class="form-group button-container">
                        <label class="card-title">{$fields.employee.employee.dob} </label>
                        <input type="date" class="form-control"  bind:value={employee.dob}>
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.employee.maritalStatus} </label><br/>
                        <label class="customradio">
                           <span class="radiotext">{$fields.employee.radiobtn.single}</span>
                           <input type=radio bind:group={employee.maritalStatus} value="single" />
                           <span class="checkmark"></span>
                        </label>
                        <label class="customradio">
                           <span class="radiotext">{$fields.employee.radiobtn.married}</span>
                           <input type=radio bind:group={employee.maritalStatus} value="married" />
                           <span class="checkmark"></span>
                        </label>
                        <!-- <label><input type=radio bind:group={employee.maritalStatus} value="single" />{$fields.employee.radiobtn.single}</label> -->
                        <!-- <label><input type=radio bind:group={employee.maritalStatus} value="married" />{$fields.employee.radiobtn.married}</label> -->
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.employee.position} </label>
                        <input type="text" class="form-control" id="text" placeholder="{$fields.employee.placeholder.position}" bind:value={employee.position} />
                     </div>
                     <div class="form-group">
                        <label class="card-title">{$fields.employee.employee.nationality}</label>
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
                     <div class="form-group mt-mpm-2">
                           <label class="card-title">{$fields.employee.employee.gender} </label><br/>
                           <label class="customradio">
                              <span class="radiotext">{$fields.employee.radiobtn.male}</span>
                              <input type=radio bind:group={employee.gender} value="male" />
                              <span class="checkmark"></span>
                           </label>
                           <label class="customradio">
                              <span class="radiotext">{$fields.employee.radiobtn.female}</span>
                              <input type=radio bind:group={employee.gender} value="female" />
                              <span class="checkmark"></span>
                           </label>
                           <!-- <label><input type=radio bind:group={employee.gender} value="male" />{$fields.employee.radiobtn.male}</label> -->
                           <!-- <label><input type=radio bind:group={employee.gender} value="female" />{$fields.employee.radiobtn.female}</label> -->
                        </div>
                        <div class="form-group">
                           <label class="card-title">{$fields.employee.employee.employeeStatus} </label><br/>
                           <label class="customradio">
                           <span class="radiotext">{$fields.employee.radiobtn.active}</span>
                           <input type=radio bind:group={employee.employeeStatus} value="active" />
                           <span class="checkmark"></span>
                           </label>
                           
                           <label class="customradio">
                              <span class="radiotext">{$fields.employee.radiobtn.inactive}</span>
                              <input type=radio bind:group={employee.employeeStatus}  value="inactive" />
                              <span class="checkmark"></span>
                           </label>

                           <!-- <label><input type=radio bind:group={employee.employeeStatus} value="inactive" />{$fields.employee.radiobtn.inactive}</label> -->
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
                  <div class="col-md-12 pt-3">          
                      <label  class="card-title">{$fields.employee.employee.photo}</label> 
                        <div class="form-group">
                           <label for="profile-image" class="employee-file-upload"><i class="fas fa-cloud-upload-alt"></i>選択
                           <input type="file" id="profile-image" accept="image/*"   bind:files on:change={uploadImage} ></label>                           
                        </div> 
                     {#if src ==''}                      
                       <div class="form-group pt-3">               
                           <img  src="noimage.jpg" alt=""  width={150} height={150} crossOrigin='anonymous' class='profile-image' />
                        </div>
                     {:else}
                     <div class="form-group pt-3" id="x_image">                                       
                        <img {src} alt="" id="imgPreview" width={150} height={150} crossOrigin='anonymous' class='profile-image' />
                        <span class='btn btn-danger hide' on:click={deleteImage(employee.photo)}>X</span>
                     </div>
                        <!-- <div class="form-group pt-3" id="x_image">                                       
                            <img  {src} alt=""  width={150} height={150} crossOrigin='anonymous' class='profile-image' />
                             <span class='btn btn-danger ' on:click={deleteImage(employee.photo)}>X</span>
                        </div> -->
                     {/if}
                     
                  </div>
                  <div class="col-md-12">
                      <button type="button" class="btn btn-blue" on:click|preventDefault={updatebtn} >{$fields.employee.form.save}</button>
                     <a href="employee" class="btn btn-outline-orange">{$fields.employee.form.cancel}</a> 
                  </div> 
               </div>
            </div>
         </div>
      </div>
   </div>
</div>



