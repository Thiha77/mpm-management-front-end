import { writable } from 'svelte/store';

const attendance = writable({
    id: null,
    recordedDateTime: '',
    employeeId: ''
});

const attendances = writable({

});

const attendanceMessages = writable({
    message: '',
    error: null
});
const fields = writable({

});
export { attendance, attendances, attendanceMessages, fields }