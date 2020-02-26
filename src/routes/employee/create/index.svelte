<script>
 import Api from '../../../components/util/Api.svelte';
 import ApiPost from '../../../util/api.js';
import EmpCreate from '../../../components/employees/CreateEmployee.svelte';

        // let empData = {
        //     name: "",
        //     alias: "",
        //     phoneNo: "",
        //     nrcNo: "",
        //     personalEmail: "",
        //     officialEmail: "",
        //     township: "",
        //     city: "",
        //     address: "",
        //     postalCode: "",
        //     dob: "",
        //     gender: "",
        //     position: "",
        //     basicSalary: "",
        //     nationality: "",
        //     race: "",
        //     maritalStatus: "",
        //     employeeStatus: ""
        // };

        const CreateData = (event) => {
            let url = "http://localhost:5000/employees/create";
            console.log(event.detail.emp);
            //  ApiPost(url,)
            //ApiPost(url,empData);
        };        
</script>
<!-- <Api></Api> -->
<!-- <EmpCreate on:create={CreateData} bind:name={empData.name} bind:alias={empData.alias} bind:phoneNo={empData.phoneNo} bind:nrcNo={empData.nrcNo} bind:personalEmail={empData.personalEmail} bind:officialEmail={empData.officialEmail} bind:township={empData.township} bind:city={empData.city} bind:address={empData.address} bind:postalCode={empData.postalCode} 
    bind:dob={empData.dob} bind:gender={empData.gender} bind:position={empData.position} bind:basicSalary={empData.basicSalary} 
    bind:nationality={empData.nationality} bind:race={empData.race} bind:maritalStatus={empData.maritalStatus} bind:employeeStatus={empData.employeeStatus}></EmpCreate> -->
<EmpCreate on:create={CreateData} ></EmpCreate>