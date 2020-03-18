<script>

    export let vErrors;
    $: errMessages = (vErrors) && Object.values(vErrors);


</script>

<div>
    {#if errMessages}
        <ul class="list-group list-group-flush">
            {#each errMessages as err}
                <li class="list-group-item">{ err }</li>
            {/each}
        </ul>
    {/if}
</div>
<style>
</style>