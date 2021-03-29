const {instance} = require('./axiosConfig')

const putOrderList = async (ordersList) => {
    const response = await instance.put('/order', ordersList)
    .catch(err => {
        console.error(err)
    })
}

module.exports = {
    putOrderList
}