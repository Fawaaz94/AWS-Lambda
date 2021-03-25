const AWS = require('aws-sdk')
const csv = require('@fast-csv/parse')
const parseRecord = require('./utils/parseRecord.js')
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
        
        const orderList = []

        const parser = csv.parseStream(csvFile2, { headers: ['id', 'date', 'email', 'orderLine'] })
        .on("data", (data) => {
            orderList.push( parseRecord(row))
        })
        .on("end", function () {

            // Sends records to the API
            crud.sendOrder(records)

            resolve('csv parse process finished')
        })
        .on("error", function () {
            reject('csv parse process failed')
        });
    })
    
}

exports.handler = main

