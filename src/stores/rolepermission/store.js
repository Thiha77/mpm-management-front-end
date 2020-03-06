import { writable } from 'svelte/store';

const rolePermission = writable({
    message: '',
    error: null
});

const editRolePermission = writable({
    id: "",
    roleId: "",
    permissionId: ""
});

export { rolePermission, editRolePermission }