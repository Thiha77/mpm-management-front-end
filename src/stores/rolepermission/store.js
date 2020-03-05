import { writable } from 'svelte/store';

const rolePermission = writable({
    createError: "",
    createMessage: ""
});

const editRolePermission = writable({
    id: "",
    roleId: "",
    permissionId: ""
});

export { rolePermission, editRolePermission }