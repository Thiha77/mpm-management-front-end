<script>
import Api from '../../../components/util/Api.svelte';
import {axiosPost} from '../../../util/api.js';
//  import { stores, goto } from '@sapper/app';
import { employee,employeeMessages } from  "../../../stores/employee/store.js";
import * as sapper from '@sapper/app';
import { apiInfo } from '../../../store.js';
import EmpCreate from '../../../components/employees/createEmployee.svelte';
import { Toast } from '../../../util/salert.js';
import { validate } from '../../../util/validator';
import ValidationBox from '../../../components/util/ValidationBox.svelte';
// const { session } = stores();

let vErrors;
    let constraints = {
        name: {
            presence: { allowEmpty: false }
        },
        phoneNo:{
            presence:true,
            numericality: { 
            onlyInteger: true,
            },
            length:{
                minimum:10,
                maximum:14,
                message:"must be at least 10 numerics and maximum 14 numerics"
            }
        },
         nrcNo:{
            presence:{allowEmpty:false}
        },
        officialEmail:{
             presence:true,
             email:{
                 email:true,
                 message:"must be mail address"
             }
        },
        address: {
           presence: { allowEmpty: false }
        },
        dob:{
            presence:true,
            date :{
                message:"You must be at least 18 years old to use "
            }
        },
         postalCode:{
            format :{
                pattern:"\\d{5}",
                message:"must be 5 numerics "
            }
        },
       basicSalary:{
            numericality: { 
            onlyInteger: true,
            greaterThanOrEqualTo: 100000
        }         
    }
        
};

        const CreateData = async(event) => {

            const body =event.detail.emp;
            vErrors = validate(body, constraints);
            if(vErrors){
            return;
        }  



            let myImage = event.detail.files[0];
            const url = $apiInfo.basePath + '/employees/create';
            const urlImage = $apiInfo.basePath + '/upload/save';
            const updateImageUrl = $apiInfo.basePath + '/employees/updateImage';
            
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

<div class="row">
    <div class="col-lg-9">
       <EmpCreate on:create={CreateData}></EmpCreate>
    </div>
    <div class="col-lg-3" >
        {#if vErrors}
            <ValidationBox {vErrors}></ValidationBox>
        {/if}
    </div>
</div>
