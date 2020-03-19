<script>
    import Api from '../../components/util/Api.svelte';
    import { axiosGet, axiosPost } from '../../util/api';
    import EmpList from '../../components/employees/ListEmployee.svelte';
     import SearchEmp from '../../components/employees/searchEmployee.svelte';
    import { empEditemployee,employeeMessages } from "../../stores/employee/store";
    import { apiInfo } from '../../store.js';
    import { goto } from '@sapper/app';
    import Swal from 'sweetalert2';
    import { Toast, CfmDelete } from '../../util/salert';

    let url = $apiInfo.basePath + '/employees';
    const method = 'get';
    let apiInstance;
    let empData;

    const deleteEmployee = async(event) => {
        let id = event.detail.id;
        CfmDelete.fire().then((result)=> {
            if(result.value){
                del(id);
            }
        })
    }
    const del = async(id) => {
            const urlEmpData = $apiInfo.basePath + '/employees/'+id;
            let empData = await axiosGet(urlEmpData);
            let photo = empData.data.photo;
            const urlUploadDelete = $apiInfo.basePath + '/upload/delete';
            let uploadPhotoDel = await axiosPost(urlUploadDelete, {photo:photo});
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
     const searchEmployee =async(event) => {
         let searchEmp = event.detail.searchEmp;
         let searchEmpUrl = (searchEmp)? $apiInfo.basePath + '/employees/search/' + searchEmp : $apiInfo.basePath + '/employees';
		apiInstance.loadExternal(searchEmpUrl);
         

     }
</script>

<svelte:head>
    <title>Employee</title>
</svelte:head>




<div class="container">   
    <SearchEmp on:searchEmp={searchEmployee}></SearchEmp>
    
    <Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
        {#if data}
            <EmpList employees={data} on:delete={deleteEmployee} on:edit={editEmployee} ></EmpList>
        {/if}
    </Api>
</div>


