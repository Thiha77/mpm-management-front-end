<script>
    import Api from '../../../components/util/Api.svelte';
    import ApiPost from '../../../util/api.js';
    import EmpUpdate from '../../../components/employees/EditEmployee.svelte';
    import { empEditemployee } from "../../../stores/employee/store.js";

     const UpdateData = (event) => {
         let EmpEdit ={
            id: $empEditemployee.id,
            name:$empEditemployee.name,
            alias: $empEditemployee.alias,
            phoneNo: $empEditemployee.phoneNo,
            nrcNo: $empEditemployee.nrcNo,
            personalEmail: $empEditemployee.personalEmail,
            officialEmail: $empEditemployee.officialEmail,
            township: $empEditemployee.township,
            city: $empEditemployee.city,
            address: $empEditemployee.address,
            postalCode: $empEditemployee.postalCode,
            dob: $empEditemployee.dob,
            gender: $empEditemployee.gender,
            position:$empEditemployee.position,
            basicSalary:$empEditemployee.basicSalary,
            nationality: $empEditemployee.nationality,
            race:$empEditemployee.race,
            maritalStatus: $empEditemployee.maritalStatus,
            employeeStatus: $empEditemployee.employeeStatus
        };
         let url = "http://localhost:5000/employees/update";
        ApiPost(url,EmpEdit);
     }
</script>


<EmpUpdate on:update={UpdateData}></EmpUpdate>