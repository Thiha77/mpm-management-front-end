<script context="module">
    import { axiosGet } from '../../../util/api';
    import config from '../../../config';
	export async function preload({ params }) {
        
        let id = params.id;
        let urlEmployeeById = `${config.apiInfo.basePath}/employees/${id}`;
        let res = await axiosGet(urlEmployeeById);
		if (res.data) {
			return { employee: res.data };
		}else{
            this.error(404, 'Not Found!');
        }
	}
</script>

<script>
    import Api from '../../../components/util/Api.svelte';
    import { axiosPost } from '../../../util/api';
    import EmpUpdate from '../../../components/employees/EditEmployee.svelte';
    import { empEditemployee,employeeMessages } from "../../../stores/employee/store";
    import { apiInfo } from '../../../store.js';
    import { goto } from '@sapper/app';
    import * as sapper from '@sapper/app';
    import { Toast } from '../../../util/salert.js';
    import { validate } from '../../../util/validator';
import ValidationBox from '../../../components/util/ValidationBox.svelte';
// const { session } = stores();
export let employee;
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
                message:"Select DOB "
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
    
    const UpdateData = async(event) => {
        let myImage = event.detail.files[0];
        console.log("myImage",myImage)
        const url = $apiInfo.basePath + '/employees/update';         
        const urlImage =$apiInfo.basePath + '/upload/save';
         const updateImageUrl = $apiInfo.basePath + '/employees/updateImage';
        let employee = event.detail.emp;
        let photo= employee.photo;
        const urlUploadDelete = $apiInfo.basePath + '/upload/delete';
        let uploadPhotoDel = await axiosPost(urlUploadDelete, {photo:photo});
        let dataImage = new FormData();
            dataImage.append('path', 'employee/images');
            dataImage.append('Image', myImage);          
        let result = await axiosPost(url, employee);
        let updateResult= await  axiosPost(urlImage,dataImage)  ; 
        let path =updateResult.data.path
         let updateEmpData = {
                id: employee.id,
                photo: path
            };
            let updateImageRes = await axiosPost(updateImageUrl,updateEmpData);
            sapper.goto("../employee");

             if(result.error == null && updateResult.error==null){
            Toast.fire(
                'Success!',
                'Employee is successfully updated.',
                'success'
            )
           sapper.goto("../employee");
        }else{
            $employeeMessages = {
                    message: '',
                    error: result.error
                }
        }
    }
</script>


<!-- <EmpUpdate {employee} on:update={UpdateData}></EmpUpdate> -->
<div class="row">
    <div class="col-lg-9">
      <EmpUpdate {employee} on:update={UpdateData}></EmpUpdate>
    </div>
    <div class="col-lg-3" >
        {#if vErrors}
            <ValidationBox {vErrors}></ValidationBox>
        {/if}
    </div>
</div>
