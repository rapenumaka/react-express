const http = require('http');

const server = http.createServer((request, response) => {

const book = {
    author : 'Charles',
    title : 'Great Expection'

};
response.setHeader('Content-Type','application/json');
response.write("Helloooo");
response.write(JSON.stringify(book));
response.end();
});

server.listen(8000);