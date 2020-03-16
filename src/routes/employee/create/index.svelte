<script>
import Api from '../../../components/util/Api.svelte';
import {axiosPost} from '../../../util/api.js';
import { employee,employeeMessages } from  "../../../stores/employee/store.js";
import * as sapper from '@sapper/app';
import { apiInfo } from '../../../store.js';
import EmpCreate from '../../../components/employees/createEmployee.svelte';
import { Toast } from '../../../util/salert.js';

        const CreateData = async(event) => {
            let myImage = event.detail.files[0];
            const url = $apiInfo.basePath + '/employees/create';
            const urlImage = $apiInfo.basePath + '/upload/save';
            const updateImageUrl = $apiInfo.basePath + '/employees/updateImage';
            const body =event.detail.emp;
            let dataImage = new FormData();
            dataImage.append('path', 'employee/images');
            dataImage.append('Image', myImage);            
            let saveResult = await axiosPost(url,body);
            let uploadResult = await axiosPost(urlImage, dataImage);
            let id = saveResult.data.id;
            let photo = uploadResult.data.path;            
            let updateEmpData = {
                id: id,
                photo: photo
            };
            let updateImageRes = await axiosPost(updateImageUrl,updateEmpData);
            // sapper.goto("../employee");
             if(saveResult.error == null && uploadResult.error==null){
            Toast.fire(
                'Success!',
                'New Employee is successfully created.',
                'success'
            )
           sapper.goto("../employee");
        }else{
            $employeeMessages = {
                    message: '',
                    error: saveResult.error
                }
        }
                            
        }; 
             
</script>
<EmpCreate on:create={CreateData}></EmpCreate>