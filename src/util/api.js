const axios = require('axios');

const axiosGet = async(url) => {
    let data;
    let error;
    try {
        let result = await axios.get(url)

        data = result.data
        return {
            data: data,
            error: null
        }
    } catch (e) {
        data = null
        error = e
        return {
            data: data,
            error: error
        }
    }
}

const axiosPost = async(url, body) => {
    let data;
    let error;
    try {
        let result = await axios.post(url , body)

        data = result.data
        return {
            data: data,
            error: null
        }
    } catch (e) {
        data = null
        error = e
        return {
            data: data,
            error: error
        }
    }
}

module.exports = {
    axiosGet, axiosPost
}