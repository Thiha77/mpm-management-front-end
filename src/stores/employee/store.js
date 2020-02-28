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
    maritalStatus: "single",
    employeeStatus: "active"
});

export {employee,empEditemployee }
