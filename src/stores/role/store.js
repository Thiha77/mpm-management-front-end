import { writable } from 'svelte/store';

const role = writable({
    createError: "",
    createMessage: ""
});

const editRoleData = writable({
    id: "",
    name: "",
    description: ""
});

export { role, editRoleData }