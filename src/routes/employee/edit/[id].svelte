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
    import { apiInfo,fields } from '../../../store.js';
    import { stores,goto } from '@sapper/app';
    import * as sapper from '@sapper/app';
    import { Toast } from '../../../util/salert.js';
    import { validate } from '../../../util/validator';
    import ValidationBox from '../../../components/util/ValidationBox.svelte';
    import enFields from '../../../languages/en/employee.json';
    import jpFields from'../../../languages/jp/employee.json';
    const { session } = stores();
    //$: $fields =$session.lan =='en' ? enFields :jpFields; 
//const { session } = stores();
export let employee;
let vErrors;
let updateResult;
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
        let employee = event.detail.emp;
        vErrors= validate(employee,constraints);
        if(vErrors) {
            return;
        }
        const url = $apiInfo.basePath + '/employees/update';       
        const urlImage =$apiInfo.basePath + '/upload/save';
        const updateImageUrl = $apiInfo.basePath + '/employees/updateImage';
        let result = await axiosPost(url, employee);
        let photo= employee.photo;
        const urlUploadDelete = $apiInfo.basePath + '/upload/delete';               
        if(event.detail.files != undefined){
        let myImage = event.detail.files[0];        
        let dataImage = new FormData();
            dataImage.append('path', 'employee/images');
            dataImage.append('Image', myImage);                     
            updateResult= await  axiosPost(urlImage,dataImage)  ; 
        let path =updateResult.data.path;
        let updateEmpData = {
                id: employee.id,
                photo: path
            };
            let updateImageRes = await axiosPost(updateImageUrl,updateEmpData);
            let uploadPhotoDel = await axiosPost(urlUploadDelete, {photo:photo})
        };
        if(result.error == null || updateResult.error==null){
            Toast.fire(
                $fields.employee.message.success,
                 $fields.employee.message.updateSuccess,
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
    {#if $session.lan && $fields}
      <EmpUpdate {employee} on:update={UpdateData}></EmpUpdate>
    {/if}

    </div>
    <div class="col-lg-3" >
        {#if vErrors}
            <ValidationBox {vErrors}></ValidationBox>
        {/if}
    </div>
</div>
