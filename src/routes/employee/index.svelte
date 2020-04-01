<script>
    import Api from '../../components/util/Api.svelte';
    import { axiosGet, axiosPost } from '../../util/api';
    import EmpList from '../../components/employees/ListEmployee.svelte';
    import SearchEmp from '../../components/employees/searchEmployee.svelte';
    import { empEditemployee,employeeMessages } from "../../stores/employee/store";
    import { apiInfo,fields } from '../../store.js';
    import { stores,goto } from '@sapper/app';
    import Swal from 'sweetalert2';
    import { Toast, CfmDelete } from '../../util/salert';
    import enFields from '../../languages/en/employee.json';
    import jpFields from'../../languages/jp/employee.json';
        const { session } = stores();
    //$: $fields =$session.lan =='en' ? enFields :jpFields; 

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
            const urlDel = $apiInfo.basePath + '/employees/delete';
            let res = await axiosPost(urlDel, { id : id});
            if(res.data > 0){
            apiInstance.refresh();
            Toast.fire(
            'Deleted!',
            $fields.employee.message.deleteSuccess,
            'success'
            );
            let photo = empData.data.photo;
            const urlUploadDelete = $apiInfo.basePath + '/upload/delete';
            let uploadPhotoDel = await axiosPost(urlUploadDelete, {photo:photo});
           
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

<section class="pr-2 pl-2">
    <div class="container-fluid">   
        {#if $session.lan && $fields}
        <div class="row">
            <div class="col-md-8"></div>
            <div class="col-md-4">
                <SearchEmp on:searchEmp={searchEmployee}></SearchEmp>
            </div>
        </div>
        <Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
            {#if data}
            <EmpList employees={data} on:delete={deleteEmployee} on:edit={editEmployee}></EmpList>
            {/if}
        </Api>
        {/if}
    </div>
</section>


  