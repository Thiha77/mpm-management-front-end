import { writable } from 'svelte/store';

const user = writable({
    createError: "",
    createMessage: ""
});

const nav = writable({
    showSideBar: true 
})
const subNav = writable({
    subNav: false 
})

export { user, nav ,subNav}
