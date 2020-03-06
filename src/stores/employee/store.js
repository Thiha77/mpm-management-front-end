import { writable } from 'svelte/store';

const employee =writable({
    createError:"",
    createMessage:''
});

const empEditemployee=writable({
    id:"",
    name: "",
    alias: "",
    phoneNo: "",
    nrcNo: "",
    personalEmail: "",
    officialEmail: "",
    township: "",
    city: "",
    address: "",
    postalCode: "",
    dob: "",
    gender: "male",
    position: "",
    basicSalary: "",
    nationality: "",
    race: "",
    photo:"",
    maritalStatus: "single",
    employeeStatus: "active"
});
const employeeMessages = writable({
    message: '',
    error: null
});


export {employee,empEditemployee,employeeMessages }
