<script>
import { nav } from '../../../store';
import { fields } from '../../../stores/user/store';
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

const changeLan = (lan) => {
    $session.lan = lan;
    localStorage.setItem('lan', lan);
}

</script>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <button on:click={() => $nav.showSideBar = !$nav.showSideBar} id="sidebarCollapse" class="btn btn-blue">
            <i class="fas fa-align-left"></i>
            <span></span>
        </button>
        <!-- <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-align-justify"></i>
        </button> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item mt-2 language-change">
                    <button class={$session.lan === "jp" ? 'language-active language-flag' : 'language-flag'} on:click={() => changeLan('jp')} title={$fields.languageTitle.jp}>
                        <img src="flags/japan-flag-icon-32.png" class="img-fluid" alt="JP" />
                    </button>
                </li>
                <li class="nav-item mt-2 ">
                    <button class={$session.lan === "en" ? 'language-active language-flag' : 'language-flag'} on:click={() => changeLan('en')} title={$fields.languageTitle.eng}>
                        <img src="flags/uk-flag-icon-32.png" class="img-fluid" alt="EN" />
                    </button>
                </li>
                {#if $session.user}
                    <li class="nav-item pt-1">
                        <label class="nav-link txt-blue text-bold pr-1" href="1">{$session.user.name} </label>
                    </li>
                {/if}
                <li class="nav-item pt-1">
                    <button class="btn btn-outline-blue d-none d-lg-block d-sm-none" on:click={logout}><i class="fas fa-sign-out-alt"></i> {$fields.navButton.logout}</button>
                    <button class="btn btn-outline-blue d-sm-block d-lg-none" on:click={logout} title={$fields.navButton.logout}><i class="fas fa-sign-out-alt"></i></button>
                </li>
            </ul>
        </div><!-- .navbar-collapse -->
    </div>
</nav><!-- .navbar-expand-lg -->