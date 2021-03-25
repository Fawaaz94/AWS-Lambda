const AWS = require('aws-sdk')
const csv = require('@fast-csv/parse')

const parseRecord = require('./utils/parseRecord.js')
const crud = require('./crud.js')

const s3 = new AWS.S3()

// For local testing
// const fs = require('fs');

// const records = []

// fs.createReadStream('output-100.csv')
// .pipe(csv.parse({headers: ['id', 'date', 'email', 'orderLine']}))
// .on('error', error => console.error(error))
// .on('data', row => {
//     records.push( parseRecord(row))
// })
// .on('end', rowCount => {
//     console.log(`Parsed ${rowCount} rows:`)
//     console.log("*************************************")
//     if(crud.sendOrderList(records)){
//         console.log("Success")
//     }
        
// });

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

        const parser = csv.parseStream(csvFile, { headers: ['id', 'date', 'email', 'orderLine'] })
        .on("data", row => {
            orderList.push( parseRecord(row) )
        })
        .on("end", rowCount => {

            console.log(`Parsed ${rowCount} rows:`)

            // Sends records to the API
            if(crud.sendOrderList(orderList)){
                console.log("Success")
            }
            
            resolve('csv parse process finished')
        })
        .on("error", () => {
            reject('csv parse process failed')
        });
    })
    
}

exports.handler = main

