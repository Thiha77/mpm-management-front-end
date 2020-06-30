<script>
    import {fade,slide, fly} from "svelte/transition";
    import { quintOut } from 'svelte/easing';
    export let notice;
    let show = true;
    // let showMore = false;
    function toggle() {
        // show? showMore = false : show = true
        show = !show;
	}
</script>
    <div class="row">
        <div class="notice notice-info col-md-12">
            <strong>{notice.title}</strong><span class="float-right txt-org readMore"  on:click={toggle}>{show? 'Hide' : 'Read'}</span>
            {#if show}
                <div transition:slide="{{duration: 20, easing: quintOut }}" >
                        <p>{notice.description}</p>
                        <p>{notice.summary}</p>
                </div>
            <!-- <div class="desc" transition:slide on:introend={()=> showMore = true}>
                {#if showMore}
                    <div transition:slide="{{ y: 150, duration: 100 }}" on:outroend={()=> show = false} class="pt-3">
                        <p>{notice.description}</p>
                        <p>{notice.summary}</p>
                    </div>
                {/if}
            </div> -->
            {/if}
        </div>
    </div>

<style>
.notice:first-child{
    margin-top:10px;
    }
.notice {
    padding: 15px;
    background-color: #fafafa;
    border-left: 6px solid #7f7f84;
    margin-bottom: 10px;
    -webkit-box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
       -moz-box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
            box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);
}
.notice-info {
    border-color: #45ABCD;
}
.notice-info>strong {
    color: #45ABCD;
}
.readMore{
    cursor:pointer;
}
</style>