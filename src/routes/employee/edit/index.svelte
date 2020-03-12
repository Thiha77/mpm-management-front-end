<script>
    import Api from '../../../components/util/Api.svelte';
    import { axiosPost } from '../../../util/api';
    import EmpUpdate from '../../../components/employees/EditEmployee.svelte';
    import { empEditemployee,employeeMessages } from "../../../stores/employee/store";
    import { apiInfo } from '../../../store.js';
    import { goto } from '@sapper/app';

    const UpdateData = async(event) => {
        let myImage = event.detail.files[0];
        const url = $apiInfo.basePath + '/employees/update';
         const urlImage =$apiInfo.basePath + '/upload/save';
        let employee = event.detail.emp;
        let dataImage = new FormData();
            dataImage.append('path', 'employee/images');
            dataImage.append('Image', myImage);
            axiosPost(urlImage,dataImage)  ;  
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