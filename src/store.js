import { writable } from 'svelte/store';

const user = writable({
    createError: "",
    createMessage: ""
});

const userEdit = writable({
    id: "",
    name: "",
    userName: "",
    password: "",
    employeeId: ""
});

export { user, userEdit }