
<script>
import { fade } from 'svelte/transition';
import { fly } from 'svelte/transition';
import { nav } from '../../../store';
// export let sidebarShow = false;
</script>
{#if $nav.showSideBar}
<nav id="sidebar">
    <div class="sidebar-header">
        <h3>Bootstrap Sidebar</h3>
        <strong>BS</strong>
    </div>

    <ul class="list-unstyled components">
        <li class="active">
            <a  href='.' data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                <i class="fas fa-home"></i>
                Home
            </a>
            <ul class="collapse list-unstyled show" id="homeSubmenu">
                <li>
                    <a href="#a">Home 1</a>
                </li>
                <li>
                    <a href="#a">Home 2</a>
                </li>
                <li>
                    <a href="#a">Home 3</a>
                </li>
            </ul>
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
                <i class="fas user-lock"></i>
                Permission
            </a>
        </li>
        <li>
            <a href="employee">
                <i class="fas fa-image"></i>
                Employee
            </a>
        </li>
    </ul>

    <ul class="list-unstyled CTAs">
        <li>
            <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
        </li>
        <li>
            <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
        </li>
    </ul>
</nav>
{/if}
