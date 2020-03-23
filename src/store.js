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

// if(typeof window !== "undefined") {
//     len = writable(localStorage.getItem("lang") || "en");
// } else {
//     len = writable(null);
// }

const system = writable({
    len : (typeof window !== "undefined")? writable(localStorage.getItem('len') || 'en') : writable(null)
})

export { user, nav, apiInfo, subNav, system }
