import { writable } from 'svelte/store';

const notice = writable({
    id: null,
    title: '',
    description: '',
    summary: '',
    employeeId: ''
});

const notices = writable({

});

const noticeMessages = writable({
    message: '',
    error: null
});

const fields = writable({

});

export { notice, notices, noticeMessages, fields }