<script>
import { nav, fields } from '../../../store';
import enFields from '../../../languages/en/en.json';
import jpFields from '../../../languages/jp/jp.json';
import { stores, goto } from '@sapper/app';
const { session } = stores();

const logout = () => {
    $session.user = null;
    if(window && window.localStorage){
        localStorage.clear();
    }
    goto('/login');
}

const changeLan = (lan) => {
    $session.lan = lan;
    localStorage.setItem('lan', lan);
}

$: $fields = ($session.lan == 'en') ? enFields : jpFields;

</script>
 <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
        <input type="checkbox" id="menu-toggle">
        <label for="menu-toggle" on:click={() => $nav.showSideBar = !$nav.showSideBar} id="sidebarCollapse" class="btn btn-blue menu-icon"><i class="fas fa-align-left"></i>
            <span></span>
        </label>
        <!-- <button on:click={() => $nav.showSideBar = !$nav.showSideBar} id="sidebarCollapse" class="btn btn-blue">
            <i class="fas fa-align-left"></i>
            <span></span>
        </button> -->
        <!-- <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-align-justify"></i>
        </button> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item mt-2 language-change">
                    <button class={$session.lan === "jp" ? 'language-active language-flag' : 'language-flag'} on:click={() => changeLan('jp')} title="JP">
                        <img src="flags/japan-flag-icon-32.png" class="img-fluid" alt="JP" />
                    </button>
                </li>
                <li class="nav-item mt-2 ">
                    <button class={$session.lan === "en" ? 'language-active language-flag' : 'language-flag'} on:click={() => changeLan('en')} title="EN">
                        <img src="flags/uk-flag-icon-32.png" class="img-fluid" alt="EN" />
                    </button>
                </li>
                {#if $session.user}
                    <li class="nav-item pt-1">
                        <label class="nav-link txt-blue text-bold pr-1" href="1">{$session.user.name} </label>
                    </li>
                {/if}
                <li class="nav-item pt-1">
                    {#if $fields}
                        <button class="btn btn-outline-blue d-none d-lg-block d-sm-none btn-wd" on:click={logout}><i class="fas fa-sign-out-alt"></i> {$fields.system.navButton.logout}</button>
                    {/if}
                    <button class="btn btn-outline-blue d-sm-block d-lg-none " on:click={logout} title="Logout"><i class="fas fa-sign-out-alt"></i></button>
                </li>
            </ul>
        </div><!-- .navbar-collapse -->
    </div>
</nav><!-- .navbar-expand-lg -->