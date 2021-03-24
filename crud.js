const axios = require('axios')

const sendOrder = async (order) => {
    const response = await axios.put('https://qgc7c2xwhg.execute-api.eu-central-1.amazonaws.com/Prod/order', order)
    .then(res => {
        console.log(`statusCode: ${res.statusCode}`)
    })
    .catch(err => {
        console.error(error)
    })
}

module.exports = {
    sendOrder
}