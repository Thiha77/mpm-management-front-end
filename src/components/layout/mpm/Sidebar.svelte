<script>
import { fly,fade,slide  } from 'svelte/transition';
import { quintOut,circIn } from 'svelte/easing';
import { nav,subNav } from '../../../store';
import { stores } from '@sapper/app';

const { session } = stores();
// import { quintOut } from 'svelte/easing';
// let sidebarCollapse = "show";
export let segment;
$: width = $nav.showSideBar ? '0px' : '-250px' ;
</script>

<nav id="sidebar" style="margin-left:{width};" class="sidebar-fixed ">
    <div class="sidebar-header">
    <!-- <a href="."><img class="img-fluid" src="favicon.png" alt="MPM Logo"></a> -->
    <a href="." class="font-weight-bold">Management Partners Myanmar</a>
    </div><!-- .sidebar-header -->
    {#if Object.keys($session.user.permissions).length }
    <span class="tag">Management</span>
    <ul class="list-unstyled components">
        <li >
            <a on:click={() => $subNav.subNav = !$subNav.subNav}  href='.' data-toggle="collapse" aria-expanded="false" class="dropdown-toggle " id="homeSubmenu"  class:selected={segment === undefined}>
                <i class="fas fa-home"></i>
                Dashboard
            </a>
            <!-- {#if $subNav.subNav}
                <ul class="collapse list-unstyled {$subNav.subNav === $subNav.subNav ? 'show' : ''}" id="homeSubmenu" in:slide="{{ y:-20 , duration: 500 }}" out:slide="{{ y:-20 , duration: 500 }}">
                    <li>
                        <a href="#a"><i class="fas fa-circle-notch"></i>Home 1</a>
                    </li>
                    <li>
                        <a href="#a"><i class="fas fa-circle-notch"></i>Home 2</a>
                    </li>
                    <li>
                        <a href="#a"><i class="fas fa-circle-notch"></i>Home 3</a>
                    </li>
                </ul> -->
                <!-- .list-unstyled -->
            <!-- {/if} -->
            <!-- commented by ATH at 25/06/20 -->
        </li>
        {#if $session.user.permissions.user && $session.user.permissions.user != 'none'}
            <li>
                <a href="user" class:selected={segment === 'user'}>
                    <i class="fas fa-users"></i>
                    User
                </a>
            </li>
        {/if}
        {#if $session.user.permissions.attendance && $session.user.permissions.attendance != 'none'}
        <li>
            <a href="attendance"  class:selected={segment === 'attendance'}>
            <i class="fas fa-list-alt"></i> 
            Attendance
            </a>
        </li>
        {/if}

        {#if $session.user.permissions.role && $session.user.permissions.role != 'none'}
        <li>
            <a href="role" class:selected={segment === 'role'}>
                <i class="fas fa-user-check"></i>
                Role
            </a>
        </li>
        {/if}
        {#if $session.user.permissions.permission && $session.user.permissions.permission != 'none'}
        <li>
            <a href="permission" class:selected={segment === 'permission'}>
                <i class="fas fa-user-secret"></i>
                Permission
            </a>
        </li>
        {/if}
        {#if $session.user.permissions.rolepermission && $session.user.permissions.rolepermission != 'none'}
        <li>
            <a href="rolepermission" class:selected={segment === 'rolepermission'}>
                <i class="fas fa-user-lock"></i>
                Role Permission
            </a>
        </li>
        {/if}
        {#if $session.user.permissions.employee && $session.user.permissions.employee != 'none'}
        <li>
            <a href="employee" class:selected={segment === 'employee'}>
                <i class="fas fa-id-card"></i>
                Employee
            </a>
        </li>
        {/if}
        {#if $session.user.permissions.notice && $session.user.permissions.notice != 'none'}
        <li>
            <a href="notice" class:selected={segment === 'notice'}>
                <i class="fas fa-bell"></i>
                Notice
            </a>
        </li>
        {/if}
    </ul><!-- .components -->
    {/if}
    <!-- <ul class="list-unstyled CTAs">
        <li>
            <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
        </li>
        <li>
            <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
        </li>
    </ul> -->
    <span class="tag">Employee</span>
        <ul class="list-unstyled components">
            <li>
                <a href="home">
                    <i class="fas fa-home"></i>
                    Home
                </a>
            </li>
            <li>
                <a href="swipe"  class:selected={segment === 'swipe'}>
                    <i class="fas fa-fingerprint"></i>
                    Swipe
                </a>
            </li>
            <li>
            <a href="about"  class:selected={segment === 'about'}>
                <i class="fas fa-address-card"></i>
                About
            </a>
        </li>
        </ul>
</nav>

<style>
.selected {
    background:#0689CE;
    border-left:3px solid #EF7F43;
    -webkit-box-shadow: inset 0 -2px rgba(255,255,255,0.1), inset 0 -3px rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.05);
    box-shadow: inset 0 -2px rgba(255,255,255,0.1), inset 0 -3px rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.05);
    color:#fff;
    }
</style>