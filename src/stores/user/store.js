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
    employeeId: "",
    roleId: null
});
const fields = writable({

});

export { user, userEdit ,fields}
// export { user }
