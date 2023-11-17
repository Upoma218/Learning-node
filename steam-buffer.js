const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    if(req.url === '/read-file', req.method === 'GET'){

        // streaming file reading

        const readableStream = fs.createReadStream(process.cwd() + '/texts/read.txt');

        readableStream.on('data', (buffer)=> {
            res.write(buffer);
        })
        readableStream.on('end', () => {
            res.statusCode = 200;
            res.end('The streaming is over!')
        })
        readableStream.listen('error', (error) => {
            res.statusCode = 500;
            console.log(error)
            res.end('Something went wrong!')
        })
    };

})

server.listen(5000, () => {
    console.log(`Server is listen on port 5000.`)
})