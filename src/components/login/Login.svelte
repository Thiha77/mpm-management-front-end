<script>
    import { axiosGet, axiosPost } from '../../util/api.js';
    import { stores,goto } from '@sapper/app';
    import { onMount } from 'svelte';
    import { apiInfo } from '../../store.js';
    import config from '../../config';
    import { Toast, Err } from '../../util/salert';
    import { nav } from '../../store'

    const { session } = stores();
    let url = config.apiInfo.basePath + '/users/searchuser';
    let userName = "";
    let password = "";
    
    onMount(() => {
    setTimeout(() => {
        username.focus()
    }, 5)
    })
function validate(){
    console.log(config.apiInfo.basePath);
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
    if(username != "" && password != "")
    {
        axiosPost(url,data).then( result => {
            if(result.data)
            {
                let user = result.data;
                let perUrl = `${config.apiInfo.basePath}/rolepermissions/permissionNameByRoleId/${user.roleId}`;
                axiosGet(perUrl).then( (r) => {

                    let permissions = {};
                    for(let i=0; i < r.data.length; i++){
                        let per = r.data[i].Permission.name;
                        let splitted = per.split("-");
                        permissions[splitted[0]] = splitted[1];
                    }
                    user.permissions = permissions;
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('lan', config.system.lan);
                    $session.user = user;
                    $session.lan = config.system.lan;
                    $nav.showSideBar = true;
                });

                if(result.data["roleId"]==1)
                {
                    goto("/");
                }
                else
                {
                    goto("swipe");
                }
                if(result.error == null){
                        Toast.fire(
                            'Success!',
                            'Login Successfully.',
                            'success'
                        );
                }
            }
            else{
                alert("User name or password is wrong!")
            }
        });
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
                    <button type="submit" class="btn btn-login" value="" id="submit" on:click|preventDefault={validate}>Login</button>
                    </div>
                    <p><span class="text-secondary">Forgot</span> <a href=".#" class="text-success">User Name / Password</a></p>
                    <p><span class="text-secondary">Don't have an account? </span><a href="." class="text-success">Sign Up</a></p>
                </form>
            </div>
        </div><!-- .mpm-login-form -->
   </div>
</div>


