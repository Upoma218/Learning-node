const fs = require('fs');

fs.readFile('./texts/read.txt', 'utf-8',(err, data) => {
    // reading asynchronusly
    if(err){
        throw Error('Error reading texts.');
    }
    console.log(data)

    // writing asynchronously

    fs.writeFile('./texts/write2.tst',data,'utf-8',(err) => {
        if(err){
            throw Error('Error in writnig data')
        }
    } )
})