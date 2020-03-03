import { writable } from 'svelte/store';

const user = writable({
    name: "ATH"
});

const nav = writable({
    showSideBar: false 
})

export { user, nav }