<script>
import { fly,fade,slide  } from 'svelte/transition';
import { quintOut,circIn } from 'svelte/easing';
import { nav,subNav } from '../../../store';
// import { quintOut } from 'svelte/easing';
// let sidebarCollapse = "show";
export let segment;
$: width = $nav.showSideBar ? 'min-width' : '0px' ;
</script>

<style>
.selected {
    background:#0689CE;
    border-left:3px solid #EF7F43;
    -webkit-box-shadow: inset 0 -2px rgba(255,255,255,0.1), inset 0 -3px rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.05);
    box-shadow: inset 0 -2px rgba(255,255,255,0.1), inset 0 -3px rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.05);
    color:#fff;
	}
</style>
    <nav id="sidebar" min-width='{width}' class="sidebar-fixed">
        <div class="sidebar-header">
        <!-- <a href="."><img class="img-fluid" src="favicon.png" alt="MPM Logo"></a> -->
        <a href="." class="font-weight-bold">Management Partners Myanmar</a>
        </div><!-- .sidebar-header -->
        <span class="tag">Admin</span>
        <ul class="list-unstyled components">
            <li >
                <a on:click={() => $subNav.subNav = !$subNav.subNav}  href='.' data-toggle="collapse" aria-expanded="false" class="dropdown-toggle " id="homeSubmenu"  class:selected={segment === undefined}>
                    <i class="fas fa-home"></i>
                    Home
                </a>
                {#if $subNav.subNav}
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
                    </ul><!-- .list-unstyled -->
                {/if}
            </li>
            <li>
                <a href="user" class:selected={segment === 'user'}>
                    <i class="fas fa-users"></i>
                    User
                </a>
            </li>
            <li>
                <a href="attendance"  class:selected={segment === 'attendance'}>
                <i class="fas fa-list-alt"></i> 
                Attendance
                </a>
            </li>
            <li>
                <a href="about"  class:selected={segment === 'about'}>
                    <i class="fas fa-address-card"></i>
                    About
                </a>
            </li>
            <li>
                <a href="role" class:selected={segment === 'role'}>
                    <i class="fas fa-user-check"></i>
                    Role
                </a>
            </li>
            <li>
                <a href="permission" class:selected={segment === 'permission'}>
                    <i class="fas fa-user-secret"></i>
                    Permission
                </a>
            </li>
            <li>
                <a href="rolepermission" class:selected={segment === 'rolepermission'}>
                    <i class="fas fa-user-lock"></i>
                    Role Permission
                </a>
            </li>
            <li>
                <a href="employee" class:selected={segment === 'employee'}>
                    <i class="fas fa-id-card"></i>
                    Employee
                </a>
            </li>
            <li>
                <a href="notice" class:selected={segment === 'notice'}>
                    <i class="fas fa-bell"></i>
                    Notice
                </a>
            </li>
        </ul><!-- .components -->
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
                    <a href="swipe"  class:selected={segment === 'swipe'}>
                        <i class="fas fa-fingerprint"></i>
                        Swipe
                    </a>
                </li>
            </ul>
    </nav>