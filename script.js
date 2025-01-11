const http = require("http");
const fs = require("fs");
const port = 8000;
const host = "127.0.0.1";
const data = "Write on file using node js";

const server = http.createServer((req, res) => {
    fs.writeFile("file.txt", data, (err) => {
        if (err)
        {
            res.writeHead(500, {"content-type":"text/plain"});
            console.log("Error");
        }
        else
        {
            res.writeHead(200, {"content-type":"text/html"});
            res.end(`<h1 style="color: green; text-align: center; background-color: gray">${data}</h1>`);
        }
    });
});

server.listen(port, host, () => {
    console.log(`Server in running on port ${port} and host ${host}`);
});