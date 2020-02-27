<script>
	// export let segment;
</script>
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
            <ul class="collapse list-unstyled" id="homeSubmenu">
                <li>
                    <a href="#1">Home 1</a>
                </li>
                <li>
                    <a href="#1">Home 2</a>
                </li>
                <li>
                    <a href="#1">Home 3</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#1">
                <i class="fas fa-briefcase"></i>
                About
            </a>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                <i class="fas fa-copy"></i>
                Pages
            </a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
                <li>
                    <a href="#1">Page 1</a>
                </li>
                <li>
                    <a href="#1">Page 2</a>
                </li>
                <li>
                    <a href="#1">Page 3</a>
                </li>
            </ul>
        </li>
    </ul>

</nav>