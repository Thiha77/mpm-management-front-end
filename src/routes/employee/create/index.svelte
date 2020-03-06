<script>
import Api from '../../../components/util/Api.svelte';
import {axiosPost} from '../../../util/api.js';
import { employee } from  "../../../stores/employee/store.js";
import * as sapper from '@sapper/app';
import EmpCreate from '../../../components/employees/CreateEmployee.svelte';
        const CreateData = (event) => {
            let url = "http://localhost:5000/employees/create";
            const body =event.detail.emp;            
            console.log("img",body);
            axiosPost(url,body).then((data)=> {
                if(data.error ==null){
                    $employee = {
                    createError: "",
                    createMessage: "Success"
                };
                sapper.goto("../employee");
                }else 
                {
                    $employee = {
                    createError: "Fail",
                    createMessage: ""
                };
                }
            });
        };        
</script>
<!-- <Api></Api> -->
<!-- <EmpCreate on:create={CreateData} bind:name={empData.name} bind:alias={empData.alias} bind:phoneNo={empData.phoneNo} bind:nrcNo={empData.nrcNo} bind:personalEmail={empData.personalEmail} bind:officialEmail={empData.officialEmail} bind:township={empData.township} bind:city={empData.city} bind:address={empData.address} bind:postalCode={empData.postalCode} 
    bind:dob={empData.dob} bind:gender={empData.gender} bind:position={empData.position} bind:basicSalary={empData.basicSalary} 
    bind:nationality={empData.nationality} bind:race={empData.race} bind:maritalStatus={empData.maritalStatus} bind:employeeStatus={empData.employeeStatus}></EmpCreate> -->
<EmpCreate on:create={CreateData}></EmpCreate>