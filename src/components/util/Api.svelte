<script>
    import axios from 'axios'
    import {onMount} from 'svelte'
    export let url;
    export let method;
    let data = null;
    let loading = false;
    let error = null;

    onMount(async()=>{
        try {
            loading = true
            let result = await axios[method](url)
            
            data = result.data
            loading = false
        } catch (e) {
            console.log(e)
            data = null
            loading = false
            error = e
        } 
    })
</script>

<slot {data} {loading} {error}/>