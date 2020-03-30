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
    import DetailList from '../../../components/employees/DetailEmpList.svelte';
    import { empEditemployee,fields } from "../../../stores/employee/store"; 
    import { stores, goto } from '@sapper/app';
    import enFields from '../../../languages/en/employee.json';
    import jpFields from'../../../languages/jp/employee.json';
    const { session } = stores();
    $: $fields =$session.lan =='en' ? enFields :jpFields; 
    export let employee;
   
</script>

  {#if $session.lan && $fields}
    <DetailList {employee}> </DetailList>
 {/if}