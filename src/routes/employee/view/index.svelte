<script>   
    import DetailList from '../../../components/employees/DetailEmpList.svelte';
    import { empEditemployee } from "../../../stores/employee/store"; 
    
   
</script>


<DetailList employee={$empEditemployee}></DetailList>