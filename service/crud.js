const {instance} = require('./axiosConfig')
const fetch = require("node-fetch");

const putOrderList = async (ordersList) => {
    await instance.put('/order', ordersList)
}

/* Attempt 2 */
// const putOrderListUsingFetch = async (ordersList) => {
//     const url = 'https://qgc7c2xwhg.execute-api.eu-central-1.amazonaws.com/Prod/order';
//     const options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(ordersList)
//     }

//     return await fetch(url , options, retries= 3)
//     .then( res => {
//             console.log(res.status)
//     })
//     .catch( err => { 
//         console.log(err)
//     })
// }

module.exports = {
    putOrderList
}