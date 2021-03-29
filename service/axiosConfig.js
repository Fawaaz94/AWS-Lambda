const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://qgc7c2xwhg.execute-api.eu-central-1.amazonaws.com/Prod'
});
 
/* Interceptors */
instance.interceptors.request.use( request => {
    console.log("Sending request...");

    return request;
}, error => {
    return Promise.reject(error);
})

instance.interceptors.response.use( response => {
    console.log("Response successfully received:");
    console.log(`--> Status Code: ${response.status}`)
    console.log(`--> Status Message: ${response.statusText}`)

    return response;
}, error => {
    return Promise.reject(error);
})

module.exports = {
    instance
}