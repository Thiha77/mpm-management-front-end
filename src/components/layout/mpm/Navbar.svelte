<script>
import { nav } from '../../../store';
// export let sidebar_show = false;
// export let sidebarCollapse;
import { stores, goto } from '@sapper/app';
const { session } = stores();

const logout = () => {
    $session.user = null;
    if(window && window.localStorage){
        localStorage.clear();
    }
    goto('/login');
}

</script>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <button on:click={() => $nav.showSideBar = !$nav.showSideBar} id="sidebarCollapse" class="btn btn-info">
            <i class="fas fa-align-left"></i>
            <span></span>
        </button>
        <!-- <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-align-justify"></i>
        </button> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">
                <!-- <li class="nav-item active">
                    <a class="nav-link" href="1">Page</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="1">Page</a>
                </li> -->
                {#if $session.user}
                    <li class="nav-item pt-1">
                        <label class="nav-link text-success text-bold" href="1">{$session.user.name}</label>
                    </li>
                {/if}
                <li class="nav-item pt-1">
                    <button class="btn btn-outline-secondary" on:click={logout}><i class="fas fa-sign-out-alt"></i> Logout</button>
                </li>
            </ul>
        </div><!-- .navbar-collapse -->
    </div>
</nav><!-- .navbar-expand-lg -->