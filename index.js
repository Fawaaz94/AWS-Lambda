const AWS = require('aws-sdk')
const csv = require('@fast-csv/parse')
const parseRecord = require('./helpers/parseRecord.js')
const crud = require('./crud.js')
const s3 = new AWS.S3()

const main = async (event) => {
    
    const object = event.Records[0].s3
    const bucket = object.bucket.name 
    const file = object.object.key
    
    const params = {
        Bucket: bucket,
        Key: file
    }

    const csvFile = s3.getObject(params).createReadStream();

    return await new Promise( (resolve, reject) => {
        
        const result = []

        const parser = csv.parseStream(csvFile, { headers: ['id', 'date', 'email', 'orderLine'] })
        .on("data", function (data) {

            const order = parseRecord(data);
            //console.log(order);
            crud.sendOrder(order);
            //console.log(Response);
        })
        .on("end", function () {
            resolve('csv parse process finished')
        })
        .on("error", function () {
            reject('csv parse process failed')
        });
    })
    
}

exports.handler = main

