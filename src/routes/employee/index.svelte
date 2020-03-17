<script>
    import Api from '../../components/util/Api.svelte';
    import { axiosPost } from '../../util/api';
    import EmpList from '../../components/employees/ListEmployee.svelte';
    import { empEditemployee,employeeMessages } from "../../stores/employee/store";
    import { apiInfo } from '../../store.js';
    import { goto } from '@sapper/app';
    import Swal from 'sweetalert2';
    import { Toast, CfmDelete } from '../../util/salert';

    let url = $apiInfo.basePath + '/employees';
    const method = 'get';
    let apiInstance;

     const deleteEmployee = async(event) => {
        let id = event.detail.id;
        CfmDelete.fire().then((result)=> {
            if(result.value){
                del(id);
            }
        })
    }
    const del = async(id) => {
       const urlDel = $apiInfo.basePath + '/employees/delete';
        let res = await axiosPost(urlDel, { id : id});
        if(res.data > 0){
            apiInstance.refresh();
            Toast.fire(
            'Deleted!',
            'Employee has been deleted.',
            'success'
            );
        }
    }

    const editEmployee = (event) => {
       let id = event.detail.emp.id;
        goto(`employee/edit/${id}`);
    }

    const detailEmployee =(event) => {
        $empEditemployee = event.detail.employee;   
         goto(`employee/view/${id}`);         
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


