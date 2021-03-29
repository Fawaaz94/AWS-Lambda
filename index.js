const AWS = require('aws-sdk')
const csv = require('@fast-csv/parse')
const {parseRecord} = require('./utils/parseRecord.js')
const crud = require('./service/crud.js')

const s3 = new AWS.S3()

const main = async (event) => {
    
    const object = event.Records[0].s3
    const bucket = object.bucket.name 
    const file = object.object.key
    
    const params = {
        Bucket: bucket,
        Key: file
    }

    // Gets the CSV file from the S3 bucket
    const csvFile = s3.getObject(params).createReadStream();

    return await new Promise( (resolve, reject) => {
        
        let orderList = []

        const parser = csv.parseStream(csvFile, { headers: ['id', 'date', 'email', 'orderLine'] })
        .on("data", row => {
            // Reads the csv file row by row, and pushes to the array

            orderList.push(parseRecord(row))
        })
        .on("end", rowCount => {
            // Reads the csv file at the end
            
            console.log(`Parsed ${rowCount} rows`)
        
            crud.putOrderList(orderList);
        })
        .on("error", () => {
            reject('csv parse process failed')
        });
    })
    
}

/* For local testing - uncomment and run */
// const fs = require('fs');

// let records = []

// fs.createReadStream('./csv/output-100.csv')
// .pipe(csv.parse({headers: ['id', 'date', 'email', 'orderLine']}))
// .on('error', error => console.error(error))
// .on('data', row => {
//     records.push( parseRecord(row))
// })
// .on('end', rowCount => {
//     console.log(`Parsed ${rowCount} rows:`)
//     console.log("****************")
    
//     crud.putOrderList(records);
// });

exports.handler = main

