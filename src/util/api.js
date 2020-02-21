const axios = require('axios');

module.exports = async(url, body) => {
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