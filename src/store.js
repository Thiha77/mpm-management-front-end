import { writable } from 'svelte/store';

const user = writable({
    name: "ATH"
});

const role = writable({
    createError: "",
    createMessage: ""
});

const editRoleData = writable({
    id: "",
    name: "",
    description: ""
});

const permission = writable({
    createError: "",
    createMessage: ""
});

const editPerData = writable({
    id: "",
    name: ""
});

export { user, role, editRoleData, permission, editPerData }