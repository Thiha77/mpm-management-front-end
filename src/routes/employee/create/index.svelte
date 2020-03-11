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
            const urlImage =$apiInfo.basePath + '/upload/save';
            const body =event.detail.emp;
            let dataImage = new FormData();
            dataImage.append('path', 'employee/images');
            dataImage.append('Image', myImage);            
            const response = await Promise.all ([
                axiosPost(url,body),
                axiosPost(urlImage, dataImage)
                
            ]);
            sapper.goto("../employee");
                            
        }; 
             
</script>
<EmpCreate on:create={CreateData}></EmpCreate>