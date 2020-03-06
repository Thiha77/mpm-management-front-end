<script>
    import { axiosPost } from '../../util/api.js';
    import { stores,goto } from '@sapper/app';
    import { onMount } from 'svelte';
    import { apiInfo } from '../../store.js';
    const { session } = stores();
    let url = $apiInfo.basePath + '/users/searchuser';
    let userName = "";
    let password = "";
onMount(() => {
  setTimeout(() => {
    username.focus()
  }, 5)
})
function validate(){
const data = {
    userName : userName,
    password : password
}
if(userName == "" && password == "")
{
    alert("Please fill up user name and password!");
    document.getElementById("username").focus();
    return false;
    
}
if(userName == "")
{
    alert("Please fill up user name!");
    document.getElementById("username").focus();
    return false;
}
if(password == "")
{
    alert("Please fill up password!");
    document.getElementById("password").focus();
    return false;
}
if(username != "" && password != ""){
axiosPost(url,data).then(result=>{
    if(result.data.length != 0)
    {
        $session.user = result.data;
        alert("Login Successfully!");
    if(result.data[0]["roleId"]==1)
    {
    goto("/")
    }
    else
    {
        goto("about");
    }
    }
    else{
        alert("User name or password is wrong!")
    }
})
}
}
</script>

<head>
<title>Login</title>
</head>
<body>
<div class="container">
<div class="main">
<h2>MPM Management System</h2>
<form id="form_id" method="post" name="myform">
<label>User Name :</label>
<input type="text" id="username" bind:value={userName}/>
<label>Password :</label>
<input type="password" id="password" bind:value={password}/>
<input type="button" value="Login" id="submit" on:click={validate}/>
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
input[type=text],input[type=password]{
width: 100%;
height: 40px;
padding: 5px;
margin-bottom: 25px;
margin-top: 5px;
border: 2px solid #ccc;
color: #4f4f4f;
font-size: 16px;
border-radius: 5px;
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
width: 100%;
border-radius: 5px;
padding: 10px 0;
outline:none;
}
input[type=button]:hover{
background: linear-gradient(#ffdd7f 5%, #ffbc00 100%);
}
</style>

