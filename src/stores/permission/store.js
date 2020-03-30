import { writable } from 'svelte/store';

const permissionMessages = writable({
    message: '',
    error: null
});

const editPermissionData = writable({
    id: "",
    name: ""
});

const fields = writable({

});

export { permissionMessages, editPermissionData, fields }