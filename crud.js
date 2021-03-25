const axios = require('axios')

const sendOrderList = async (ordersList) => {
    const response = await axios.put('https://qgc7c2xwhg.execute-api.eu-central-1.amazonaws.com/Prod/order', ordersList)
    .then(res => {
        console.log("All records parsed!")
        
        return true;
    })
    .catch(err => {
        console.error(err)

        return false;
    })
}

module.exports = {
    sendOrderList
}