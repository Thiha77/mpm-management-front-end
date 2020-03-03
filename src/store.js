import { writable } from 'svelte/store';

const user = writable({
    createError: "",
    createMessage: ""
});

const nav = writable({
    showSideBar: true 
})

export { user, nav }
