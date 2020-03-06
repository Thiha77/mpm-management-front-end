<script>
    import Api from '../../../components/util/Api.svelte';
    import { axiosPost } from '../../../util/api';
    import EmpUpdate from '../../../components/employees/EditEmployee.svelte';
    import { empEditemployee,employeeMessages } from "../../../stores/employee/store";
    import { apiInfo } from '../../../store.js';
    import { goto } from '@sapper/app';

    const UpdateData = async(event) => {
        const url = $apiInfo.basePath + '/employees/update';
        let employee = event.detail.emp;
       
        let result = await axiosPost(url, employee);
        if(result.error == null){
            $employeeMessages = {
                message: 'Update Success',
                error: 'Error'
            }
            goto('../employee');
        }else{
            $employeeMessages = {
                    message: '',
                    error: result.error
                }
        }
    }
</script>


<EmpUpdate employee={$empEditemployee} on:update={UpdateData}></EmpUpdate>