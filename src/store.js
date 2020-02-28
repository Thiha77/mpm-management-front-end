import { writable } from 'svelte/store';

const user = writable({
    createError: "",
    createMessage: ""
});

export { user }
