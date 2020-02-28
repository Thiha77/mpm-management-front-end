import { writable } from 'svelte/store';

const permission = writable({
    createError: "",
    createMessage: ""
});

const editPerData = writable({
    id: "",
    name: ""
});

export { permission, editPerData }