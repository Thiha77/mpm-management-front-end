<script>
import { createEventDispatcher } from "svelte";
import { stores,goto } from '@sapper/app';
 import { fields } from '../../store';
const dispatch = createEventDispatcher();
//export let fields;
export let employee;
</script>
<div class="container">
   <div class="row">
      <div class="col">
         <div class="card card-mpm1 mb-5">
            <div class="card-body">
               <div class="row p-3">
                  <div class="col-2">
                     {#if employee.photo}
                     <img src={employee.photo}  width={150} height={150} class="avatar img-fluid employee-photo" alt="Image"/>
                     {:else}
                     <img src="noimage.jpg"  width={150} height={150} class="avatar img-fluid employee-photo" alt="Image"/>
                     {/if}
                  </div>
                  <div class="col-10">
                     <div class="profile-info">
                        <div class="profile-preword mb-4"><span>{$fields.employee.form.hello}</span></div>
                        <h2 class="profile-title"><span class="font-weight-normal">{$fields.employee.form.intro}</span> {employee.name}</h2>
                        <h3 class="profile-position">{employee.position}</h3>
                        <h3 class="profile-position">{$fields.employee.employee.employeeId + '-' + employee.employeeId}</h3>
                     </div>
                  </div>
               </div>
               <div class="row p-3">
                  <div class="col-md-6 col-sm-12">
                     <ul class="personal-list">
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.name}</strong>
                           <span class="personal-cont">{employee.name}</span>
                        </li>
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.dob}</strong>
                           <span class="personal-cont">{employee.dob}</span>
                        </li>
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.gender}</strong>
                           <span class="personal-cont">{employee.gender}</span>
                        </li>
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.position}</strong>
                           <span class="personal-cont">{employee.position}</span>
                        </li>
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.personalEmail}</strong>
                           <span class="personal-cont">{employee.personalEmail}</span>
                        </li> 
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.address}</strong>
                           <span class="personal-cont">{employee.address}</span>
                        </li>
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.city}</strong>
                           <span class="personal-cont">{employee.city}</span>
                        </li>
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.maritalStatus}</strong>
                           <span class="personal-cont">{employee.maritalStatus}</span>
                        </li>
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.nationality}</strong>
                           <span class="personal-cont">{employee.nationality}</span>
                        </li>
                     </ul>
                  </div>
                  <div class="col-md-6 col-sm-12">
                     <ul class="personal-list">
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.alias}</strong>
                           <span class="personal-cont">{employee.alias}</span>
                        </li>
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.nrcNo}</strong>
                           <span class="personal-cont">{employee.nrcNo}</span>
                        </li>
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.phoneNo}</strong>
                           <span class="personal-cont">{employee.phoneNo}</span>
                        </li>
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.basicSalary}</strong>
                           <span class="personal-cont">{employee.basicSalary}</span>
                        </li>
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.officialEmail}</strong>
                           <span class="personal-cont">{employee.officialEmail}</span>
                        </li>
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.township}</strong>
                           <span class="personal-cont">{employee.township}</span>
                        </li>
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.postalCode}</strong>
                           <span class="personal-cont">{employee.postalCode}</span>
                        </li>
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.employeeStatus}</strong>
                           <span class="personal-cont">{employee.employeeStatus}</span>
                        </li>
                        <li>
                           <strong class="personal-title">{$fields.employee.employee.race}</strong>
                           <span class="personal-cont">{employee.race}</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div><!-- .card-body -->
            <div class="card-footer bg-blue-mpm">
               <div class="col-md-12">
                  <a href="employee" class="btn btn-outline-orange float-right">{$fields.employee.form.back}</a>
               </div> 
            </div>
         </div>
      </div>
   </div>
</div>

  