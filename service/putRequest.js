const crud = require('./crud')
const {sliceIntoChunks} = require('../utils/sliceIntoChunks')


const putRequest = (records) => {
    
    if(records.length > 20000 && records.length <= 100000){
        const slicedArray = sliceIntoChunks(records, 20000)

        /* Attempt 3 */
        var promise = Promise.resolve();

        slicedArray.forEach(chunk => {

            promise = promise.then( () => {
               
                crud.putOrderList(chunk);
               
                return new Promise( resolve => {
                  setTimeout(resolve, 2000);
                });

            });

            /* Attempt 2 */
            // setTimeout(() => crud.putOrderList(chunk, true), 25000);    
        });

    }
    else if(records.length > 100000){
        const slicedArray = sliceIntoChunks(records, 20000)
        
        var promise = Promise.resolve();

        slicedArray.forEach(chunk => {

            promise = promise.then( () => {
               
                crud.putOrderList(chunk);
               
                return new Promise( resolve => {
                  setTimeout(resolve, 10000);
                });

            });

            /* Attempt 2 */
            // setTimeout(() => crud.putOrderList(chunk, true), 25000);    
        });

    }
    else{
        crud.putOrderList(records);
    }
}

module.exports = {
    putRequest
}