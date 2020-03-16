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
    import { empEditemployee } from "../../../stores/employee/store"; 
    export let employee;
   
</script>


<DetailList {employee}></DetailList>