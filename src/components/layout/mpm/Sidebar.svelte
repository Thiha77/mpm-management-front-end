<script>
import { fly,fade,slide  } from 'svelte/transition';
import { quintOut,circIn } from 'svelte/easing';
import { nav,subNav } from '../../../store';
// import { quintOut } from 'svelte/easing';
// let sidebarCollapse = "show";
</script>
{#if $nav.showSideBar}
    <nav id="sidebar" in:fly="{{ x:-250 , duration: 500 }}" out:fly="{{ x:-250 , duration: 500 }}">
        <div class="sidebar-header">
        <!-- <a href="."><img class="img-fluid" src="favicon.png" alt="MPM Logo"></a> -->
        <a href=".">MPM</a>
        </div><!-- .sidebar-header -->
        <ul class="list-unstyled components">
            <li >
                <a on:click={() => $subNav.subNav = !$subNav.subNav}  href='.' data-toggle="collapse" aria-expanded="false" class="dropdown-toggle " id="homeSubmenu">
                    <i class="fas fa-home"></i>
                    Home
                </a>
                {#if $subNav.subNav}
                    <ul class="collapse list-unstyled {$subNav.subNav === $subNav.subNav ? 'show' : ''}" id="homeSubmenu" in:slide="{{ y:-20 , duration: 500 }}" out:slide="{{ y:-20 , duration: 500 }}">
                        <li>
                            <a href="#a">Home 1</a>
                        </li>
                        <li>
                            <a href="#a">Home 2</a>
                        </li>
                        <li>
                            <a href="#a">Home 3</a>
                        </li>
                    </ul><!-- .list-unstyled -->
                {/if}
            </li>
            <li>
                <a href="user">
                    <i class="fas fa-users"></i>
                    User
                </a>
                <ul class="collapse list-unstyled">
                    <li>
                        <a href="#a">User 1</a>
                    </li>
                    <li>
                        <a href="#a">User 2</a>
                    </li>
                    <li>
                        <a href="#a">User 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="about">
                    <i class="fas fa-address-card"></i>
                    About
                </a>
            </li>
            <li>
                <a href="role">
                    <i class="fas fa-user-check"></i>
                    Role
                </a>
            </li>
            <li>
                <a href="permission">
                    <i class="fas fa-user-secret"></i>
                    Permission
                </a>
            </li>
            <li>
                <a href="employee">
                    <i class="fas fa-image"></i>
                    Employee
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
    </nav>
{/if}
