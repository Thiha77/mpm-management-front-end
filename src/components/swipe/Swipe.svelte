<script>
    import { axiosPost } from '../../util/api.js';
    import moment from 'moment';
    import { stores,goto } from '@sapper/app';
    import { apiInfo } from '../../store.js';
    const { session } = stores();
    
    let urlbyemployeeId = $apiInfo.basePath + '/employees/searchByEmployeeId';
    let urlattendancecreate = $apiInfo.basePath + '/attendances/create';
    let employeeName;
    let employeeId = $session.user[0]["employeeId"];
    let userdata = {
        employeeId : employeeId
    }
        axiosPost(urlbyemployeeId,userdata).then(result=>{
            employeeName = result.data[0]["name"];
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
 
 setTimeout(function() {
        document.getElementById('submit').disabled = false;
        document.getElementById("employeeName").value="";
        document.getElementById("recordeddatetime").value="";
        if($session.user[0]["roleId"] != 1){
            goto("login");
        }
        else{
            goto("/");
        }
    }, 3000);
}
</script>

<head>
<title>Swipe</title>
</head>
<body>
<div class="container">
<div class="main">
<h2>Time In/Time Out</h2>
<form id="form_id" method="post" name="myform">
<label>Employee Name :</label>
<input type="text" id="employeeName"/>
<label>Time :</label>
<input type="text" id="recordeddatetime"/>
<br/><br/>
<center><input type="button" value="Swipe" id="submit" on:click={TimeInOut}/></center>

</form>
</div>
</div>
</body>

<style>
@import url(http://fonts.googleapis.com/css?family=Raleway);
h2{
background-color: #FEFFED;
padding: 30px 35px;
margin: -10px -50px;
text-align:center;
border-radius: 10px 10px 0 0;
}
div.container{
width: 900px;
height: 610px;
margin:35px auto;
font-family: 'Raleway', sans-serif;
}
div.main{
width: 300px;
padding: 10px 50px 25px;
border: 2px solid gray;
border-radius: 10px;
font-family: raleway;
float:left;
margin-top:50px;
}

label{
color: #464646;
text-shadow: 0 1px 0 #fff;
font-size: 14px;
font-weight: bold;
}

input[type=button]{
font-size: 16px;
background: linear-gradient(#ffbc00 5%, #ffdd7f 100%);
border: 1px solid #e5a900;
color: #4E4D4B;
font-weight: bold;
cursor: pointer;
width: 30%;
border-radius: 5px;
padding: 10px 0;
outline:none;
}
input[type=button]:hover{
background: linear-gradient(#ffdd7f 5%, #ffbc00 100%);
}
input[type=text]{
border:none;
}
</style>

