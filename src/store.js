import { writable, readable } from 'svelte/store';

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

const apiInfo = readable({
    basePath: "http://localhost:5000"
})

export { user, nav, apiInfo, subNav }
