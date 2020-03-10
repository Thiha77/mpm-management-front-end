import { writable } from 'svelte/store';

const user = writable({
    message: '',
    error: null
});

const userEdit = writable({
    id: "",
    name: "",
    userName: "",
    password: "",
    employeeId: ""
});

export { user, userEdit }
// export { user }
