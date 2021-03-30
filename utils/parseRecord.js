const {dateConversion} = require('./dateConversion.js')

parseRecord = (data) => {

    let total = 0;

    // Create orderLine opbject 
    const orderLines = []

    const orderLineSplitColon = data.orderLine.split(';') 
    orderLineSplitColon.pop() 
   
    orderLineSplitColon.forEach( section => {

        const orderLineSplitLine = section.split('|') 
        
        const orderLineObject = {
            productCode: orderLineSplitLine[0],
            value: parseFloat(orderLineSplitLine[1])
        }
       
        orderLines.push(orderLineObject)
        
        total += parseFloat(orderLineSplitLine[1])
    });

    // Final order object
    const order = {
        id: data.id,
        email: data.email,
        orderDate: dateConversion(data.date),
        total: parseFloat(total.toFixed(2)),
        orderLines: orderLines
    }

    return order;
} 

module.exports = {
    parseRecord
}