const dateConversion = require('./dateConversion.js')

module.exports = function (data) {

    var total = 0;
    const orderLines = []

    const orderLineSplitColon = data.orderLine.split(/[;]/) 
    orderLineSplitColon.pop() 
   
    orderLineSplitColon.forEach( element => {

        const orderLineSplitLine = element.split('|') 

        const orderLineObject = {
            productCode: orderLineSplitLine[0],
            value: parseFloat(orderLineSplitLine[1])
        }
       
        orderLines.push(orderLineObject)
        
        total += parseFloat(orderLineSplitLine[1])
    });

    const order = {
        id: data.id,
        email: data.email,
        orderDate: dateConversion.dateConversion(data.date),
        total: parseFloat(total.toFixed(2)),
        orderLines: orderLines
    }

    return order;
} 

