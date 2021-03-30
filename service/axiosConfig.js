const axios = require('axios').default
const axiosRetry = require('axios-retry')

const instance = axios.create({
    baseURL: 'https://qgc7c2xwhg.execute-api.eu-central-1.amazonaws.com/Prod'
    // delayed: true,
})

axiosRetry(instance, { retries: 3 });

/* Interceptors */
instance.interceptors.request.use( 
    (request) => {
        console.log("Sending request...");
        
        /* Attempt 1 */
        // if(request.delayed){
        //     return new Promise(resolve => setTimeout(() => resolve(request), 25000));
        // }

        return request;
    }, 
    (error) => {
    return Promise.reject(error);
    })

instance.interceptors.response.use( 
    (response) => {
        // console.log("Response successfully received:");
        console.log(`--> Status Code: ${response.status}`)
        // console.log(`--> Status Message: ${response.statusText}`)

        return response;
    }, 
    (error) => {
    return Promise.reject(error);
    })

module.exports = {
    instance
}