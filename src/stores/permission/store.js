import { writable } from 'svelte/store';

const permissionMessages = writable({
    message: '',
    error: null
});

const editPermissionData = writable({
    id: "",
    name: ""
});

export { permissionMessages, editPermissionData }