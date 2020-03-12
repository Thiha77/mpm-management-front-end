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
        localStorage.setItem('user', JSON.stringify(result.data));
        $session.user = result.data;
    if(result.data["roleId"]==1)
    {
        goto("home")
    }
    else
    {
        goto("swipe");
    }
    }
    else{
        alert("User name or password is wrong!")
    }
})
}
}
</script>
<div class="container">
   <div class="row">
        <div class="mpm-login-form pt-mpm-20 ">
            <!-- <h3 class="text-center mb-5">Welcome</h3> -->
            <figure class="clearfix bg-login-img">
                <img src="mpm_logo.png" class="img-fluid" alt="">
            </figure>
            <div class="col-12 pt-5">
                <form id="form_id" method="post" name="myform">
                    <div class="form-group mpm-login-input-group mpm-login-bdr">
                        <input class="mpm-login-input" type="text" id="username" bind:value={userName} placeholder="User Name"/>
                        <span class="focus-input" ></span>
                    </div>
                    <div class="form-group mpm-login-input-group mpm-login-bdr">
                        <input class="mpm-login-input" type="password" id="password" bind:value={password}  placeholder="Password"/>
                        <span class="focus-input"></span>
                    </div>
                    <div class="mt-5 mb-5">
                    <button class="btn btn-login" value="" id="submit" on:click={validate}>Login</button>
                    </div>
                    <p><span class="text-secondary">Forgot</span> <span class="text-success">User Name / Password</span></p>
                    <p><span class="text-secondary">Don't have an account? </span><span class="text-success"> Sign Up</span></p>
                </form>
            </div>
        </div><!-- .mpm-login-form -->
   </div>
</div>


