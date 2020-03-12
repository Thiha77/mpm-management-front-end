const { axiosGet } = require('./api');
// import { apiInfo } from '../store.js';

const url= 'http://localhost:5000/rolepermissions/permissionNameByRoleId/1';
let data;
let error;

const getPermission = async() => {
    let result = await axiosGet(url);
    data = result.data;
    return {
        data: data,
        error: null
    }
}

module.exports = {
    getPermission
}