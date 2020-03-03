
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
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
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
            <a href="#a">
                <i class="fas fa-briefcase"></i>
                About
            </a>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                <i class="fas fa-copy"></i>
                Pages
            </a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
                <li>
                    <a href="#a">Page 1</a>
                </li>
                <li>
                    <a href="#a">Page 2</a>
                </li>
                <li>
                    <a href="#a">Page 3</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#a">
                <i class="fas fa-image"></i>
                Portfolio
            </a>
        </li>
        <li>
            <a href="#a">
                <i class="fas fa-question"></i>
                FAQ
            </a>
        </li>
        <li>
            <a href="#a">
                <i class="fas fa-paper-plane"></i>
                Contact
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
