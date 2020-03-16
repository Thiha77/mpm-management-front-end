<script>
import Api from '../../../components/util/Api.svelte';
import {axiosPost} from '../../../util/api.js';
import { employee } from  "../../../stores/employee/store.js";
import * as sapper from '@sapper/app';
import { apiInfo } from '../../../store.js';
import EmpCreate from '../../../components/employees/createEmployee.svelte';
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
            // photo = photo.replace("\\","/");
            // let split = photo.split("\\");
            // photo = split[1]+'/'+split[2]+'/'+split[3];
            // photo = "http://localhost:5000/"+photo;

            let updateEmpData = {
                id: id,
                photo: photo
            };
            let updateImageRes = await axiosPost(updateImageUrl,updateEmpData);
            sapper.goto("../employee");
                            
        }; 
             
</script>
<EmpCreate on:create={CreateData}></EmpCreate>