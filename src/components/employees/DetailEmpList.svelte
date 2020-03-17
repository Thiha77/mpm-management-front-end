<script>
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
export let employee;
</script>
<div class="container">
   <div class="row">
      <div class="col">
         <div class="card card-mpm1 mb-5">
            <div class="card-body">
               <div class="row p-3">
                  <div class="col-2">
                     <img src={employee.photo}  width={150} height={150} class="avatar img-fluid employee-photo" alt="Image"/>
                  </div>
                  <div class="col-10">
                     <div class="profile-info">
                        <div class="profile-preword mb-4"><span>Hello</span></div>
                        <h2 class="profile-title"><span class="font-weight-normal">I'm</span> {employee.name}</h2>
                        <h3 class="profile-position">{employee.position}</h3>
                     </div>
                  </div>
               </div>
               <div class="row p-3">
                  <div class="col-md-6 col-sm-12">
                     <ul class="personal-list">
                        <li>
                           <strong class="personal-title">Employee Name</strong>
                           <span class="personal-cont">{employee.name}</span>
                        </li>
                        <li>
                           <strong class="personal-title">Birthday</strong>
                           <span class="personal-cont">{employee.dob}</span>
                        </li>
                        <li>
                           <strong class="personal-title">Gender</strong>
                           <span class="personal-cont">{employee.gender}</span>
                        </li>
                        <li>
                           <strong class="personal-title">Position</strong>
                           <span class="personal-cont">{employee.position}</span>
                        </li>
                        <li>
                           <strong class="personal-title">Personal Email</strong>
                           <span class="personal-cont">{employee.personalEmail}</span>
                        </li> 
                        <li>
                           <strong class="personal-title">Address</strong>
                           <span class="personal-cont">{employee.address}</span>
                        </li>
                        <li>
                           <strong class="personal-title">City</strong>
                           <span class="personal-cont">{employee.city}</span>
                        </li>
                        <li>
                           <strong class="personal-title">Marital Status</strong>
                           <span class="personal-cont">{employee.maritalStatus}</span>
                        </li>
                        <li>
                           <strong class="personal-title">Nationality</strong>
                           <span class="personal-cont">{employee.nationality}</span>
                        </li>
                     </ul>
                  </div>
                  <div class="col-md-6 col-sm-12">
                     <ul class="personal-list">
                        <li>
                           <strong class="personal-title">Name</strong>
                           <span class="personal-cont">{employee.alias}</span>
                        </li>
                        <li>
                           <strong class="personal-title">NRC Number</strong>
                           <span class="personal-cont">{employee.nrcNo}</span>
                        </li>
                        <li>
                           <strong class="personal-title">Phone Number</strong>
                           <span class="personal-cont">{employee.phoneNo}</span>
                        </li>
                        <li>
                           <strong class="personal-title">Salary</strong>
                           <span class="personal-cont">{employee.basicSalary}</span>
                        </li>
                        <li>
                           <strong class="personal-title">Emplpoyee Email</strong>
                           <span class="personal-cont">{employee.officialEmail}</span>
                        </li>
                        <li>
                           <strong class="personal-title">Township</strong>
                           <span class="personal-cont">{employee.township}</span>
                        </li>
                        <li>
                           <strong class="personal-title">Postal Code</strong>
                           <span class="personal-cont">{employee.postalCode}</span>
                        </li>
                        <li>
                           <strong class="personal-title">Employee Status</strong>
                           <span class="personal-cont">{employee.employeeStatus}</span>
                        </li>
                        <li>
                           <strong class="personal-title">Race</strong>
                           <span class="personal-cont">{employee.race}</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div><!-- .card-body -->
            <div class="card-footer bg-blue-mpm">
               <div class="col-md-12">
                  <a href="employee" class="btn btn-outline-warning float-right">Back</a>
               </div> 
            </div>
         </div>
      </div>
   </div>
</div>

  