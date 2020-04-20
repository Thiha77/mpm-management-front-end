<script> import Api from '../../../components/util/Api.svelte';
import {axiosPost}from '../../../util/api.js';
import { stores, goto } from '@sapper/app';
import {employee,employeeMessages}from "../../../stores/employee/store.js";
import * as sapper from '@sapper/app';
import {apiInfo ,fields}from '../../../store.js';
import EmpCreate from '../../../components/employees/createEmployee.svelte';
import {Toast}from '../../../util/salert.js';
import {validate}from '../../../util/validator';
import ValidationBox from '../../../components/util/ValidationBox.svelte';
import enFields from '../../../languages/en/employee.json';
import jpFields from'../../../languages/jp/employee.json';
const { session } = stores();
//$: $fields =$session.lan =='en' ? enFields :jpFields; 
let vErrors;
let constraints= {
    name: {
        presence: {
            allowEmpty: false
        }
    }
    ,
    phoneNo: {
        presence:true,
        numericality: {
            onlyInteger: true,
        }
        ,
        length: {
            minimum: 10, maximum: 14, message: "must be at least 10 numerics and maximum 14 numerics"
        }
    }
    ,
    nrcNo: {
        presence: {
            allowEmpty: false
        }
    }
    ,
    officialEmail: {
        presence:true,
        email: {
            email: true, message: "must be mail address"
        }
    }
    ,
    address: {
        presence: {
            allowEmpty: false
        }
    }
    ,
    dob: {
        presence:true,
        date: {
            message: "Select DOB "
        }
    }
    ,
    postalCode: {
        format: {
            pattern:"\\d{5}",
            message: "must be 5 numerics "
        }
    }
    ,
    basicSalary: {
        numericality: {
            onlyInteger: true, greaterThanOrEqualTo: 100000
        }
    }
};
let saveResult;
let uploadResult;
const CreateData=async(event)=> {
    const body=event.detail.emp;
    vErrors=validate(body, constraints);
    if(vErrors) {
        return;
    }        
        const url=$apiInfo.basePath + '/employees/create';
        const urlImage=$apiInfo.basePath + '/upload/save';
        const updateImageUrl=$apiInfo.basePath + '/employees/updateImage';
        saveResult=await axiosPost(url, body);
        if(event.detail.files =='' || event.detail.files!=undefined) {
            let myImage=event.detail.files[0];
            let dataImage=new FormData();
            dataImage.append('path', 'employee/images');
            dataImage.append('Image', myImage);

             uploadResult=await axiosPost(urlImage, dataImage);
            let id=saveResult.data.id;
            let photo=uploadResult.data.path;
            let updateEmpData= {
                id: id,    
                photo:photo
            };
            let updateImageRes=await axiosPost(updateImageUrl, updateEmpData);
        } 
        if(saveResult.error==null || uploadResult.error==null) {
            Toast.fire( $fields.employee.message.success, $fields.employee.message.saveSuccess, 'success') 
            sapper.goto("../employee");
        }
        else {
            $employeeMessages= {
                message: '', 
                error: saveResult.error
            }
        }
};
</script> 
<section class="pr-2 pl-2">
    <div class="container-fluid">
        <div class="row"> 
            <div class="col-lg-9"> 
            {#if $session.lan && $fields}
                <EmpCreate on:create= {CreateData}></EmpCreate> 
            {/if}
            </div> 
            <div class="col-lg-3" >
            {#if vErrors}
                <ValidationBox {vErrors}></ValidationBox> 
            {/if}

            </div> 
        </div>
    </div>
</section>