<script>
    import Api from '../../components/util/Api.svelte';
    import { axiosPost } from '../../util/api';
    import EmpList from '../../components/employees/ListEmployee.svelte';
    import { empEditemployee,employeeMessages } from "../../stores/employee/store";
    import { apiInfo } from '../../store.js';
    import { goto } from '@sapper/app';

    let url = $apiInfo.basePath + '/employees';
    const method = 'get';
    let apiInstance;

     const deleteEmployee = async(event) => {
        let id = event.detail.id;
        if(confirm("Are you sure you want to delete?")){
            const urlDel = $apiInfo.basePath + '/employees/delete';
            let result = await axiosPost(urlDel, { id : id})
            apiInstance.refresh();
        }
    }
    const editEmployee = (event) => {

// let id = event.detail.notice.id;
//         goto(`notice/edit/${id}`);

       let id = event.detail.emp.id;
        goto(`employee/edit/${id}`);
        //goto('employee/edit');
    }

    const detailEmployee =(event) => {
        $empEditemployee = event.detail.employee;   
         goto(`employee/view/${id}`);     
         //goto('employee/view');    
    }
</script>

<svelte:head>
    <title>Employee</title>
</svelte:head>




<div class="container">
    {#if $employeeMessages.message}
        <h1>{$employeeMessages.message}</h1>
    {/if}
    <Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
        {#if data}
            <EmpList employees={data} on:delete={deleteEmployee} on:edit={editEmployee} on:list={detailEmployee}></EmpList>
        {/if}
    </Api>
</div>


