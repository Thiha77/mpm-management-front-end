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

export { attendance, attendances, attendanceMessages }