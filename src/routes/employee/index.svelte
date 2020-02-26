<script>
    import Api from '../../components/util/Api.svelte';
    import EmpList from '../../components/employees/ListEmployee.svelte';
    import EmpCreate from '../../components/employees/CreateEmployee.svelte';

</script>

<svelte:head>
    <title>Employee</title>
</svelte:head>

<Api url="http://localhost:5000/employees" method="get" let:data let:loading let:error >
   {#if data}
    <EmpList employees={data}></EmpList>
   {/if}

</Api>

<style></style>

