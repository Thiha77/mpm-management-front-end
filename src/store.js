import { writable } from 'svelte/store';

const user = writable({
    name: "ATH"
});

export { user }
