<script>
    import axios from 'axios'
    import {onMount, beforeUpdate} from 'svelte'
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
    });
    export const refresh = async() => {
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
    }
    export const loadExternal = async(exUrl) => {
        try {
            loading = true
            let result = await axios[method](exUrl)
            
            data = result.data
            loading = false
        } catch (e) {
            console.log(e)
            data = null
            loading = false
            error = e
        }
    }
</script>

<slot {data} {loading} {error}/>