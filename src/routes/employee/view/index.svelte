<script>
    import Api from '../../../components/util/Api.svelte';
    import DetailEmpList from '../../../components/employees/DetailEmpList.svelte';
    //import EmpCreate from '../../components/employees/CreateEmployee.svelte';
</script>



 
<Api url="http://localhost:5000/employees" method="get" let:data let:loading let:error >
   {#if data}
    <DetailEmpList employees={data}></DetailEmpList>
   {/if}
</Api>


<style></style>

