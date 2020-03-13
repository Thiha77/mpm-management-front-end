<script>
    import { axiosPost } from '../../util/api.js';
    import moment from 'moment';
    import { stores,goto } from '@sapper/app';
    import { apiInfo } from '../../store.js';
    import { onMount } from 'svelte';
    const { session } = stores();
    
    let urlbyemployeeId = $apiInfo.basePath + '/employees/searchByEmployeeId';
    let urlattendancecreate = $apiInfo.basePath + '/attendances/create';
    let employeeName;
    let employeeId;

    onMount( () => {
        employeeId = $session.user.employeeId;
        let userdata = {
            employeeId : employeeId
        }
        axiosPost(urlbyemployeeId,userdata).then(result=>{
            employeeName = result.data[0]["name"];
        })
    })

    const TimeInOut=(event)=>{
        const date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        console.log("before moment"+date);
        const dateformat  = moment.utc(date).toDate();
        console.log("local Time"+dateformat);
        const localTime = moment(dateformat).format('YYYY-MM-DD HH:mm:ss');
        console.log("moment: " + localTime);
        document.getElementById('submit').disabled = true;
        document.getElementById("employeeName").value = employeeName;
        document.getElementById("recordeddatetime").value = localTime;
        
        const data={
            employeeId:employeeId,
            recordedDateTime:localTime
        }
        axiosPost(urlattendancecreate,data);
    
        setTimeout( () => {
            document.getElementById('submit').disabled = false;
            document.getElementById("employeeName").value="";
            document.getElementById("recordeddatetime").value="";
            if($session.user["roleId"] != 1){
                goto("login");
            }
            else{
                goto("/");
            }
        }, 3000);
    }
</script>
<div class="container">
    <div class="row">
        <div class="col-4 mx-auto pt-mpm-20">
            <div class="card swipe-form">
                <div class="avatar">
                    <img src="favicon.png" alt="Avatar">
                </div>     
                <div class="card-body">
                    <h3 class="card-title text-center mt-5 text-secondary">Time In / Time Out</h3>
                        <form id="form_id" method="post" name="myform" class="pt-3">
                            <div class="form-group">
                                <label class="font-weight-bold text-secondary">Employee Name :</label>
                                <input class="swipe-control txt-org" type="text" id="employeeName"/>
                            </div>
                            <div class="form-group">
                                <label class="font-weight-bold text-secondary">Time :</label>
                                <input class="swipe-control txt-org" type="text" id="recordeddatetime"/>
                            </div>
                            <div class="pb-3">
                                <input class="btn bg-org-mpm btn-swipe" type="button" value="Swipe" id="submit" on:click={TimeInOut}/>
                            </div>
                        </form>
                </div><!-- .card-body -->
            </div><!-- .card -->
        </div>
    </div>
</div>