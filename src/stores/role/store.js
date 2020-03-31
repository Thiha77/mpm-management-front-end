import { writable } from 'svelte/store';

const roleMessages = writable({
    message: '',
    error: null
});

const editRoleData = writable({
    id: "",
    name: "",
    description: ""
});

const fields = writable({

});

export { roleMessages, editRoleData, fields }