var fs = require('fs');
var filename = "/Users/siyara/Downloads/bs test/test.txt";

function get_line(filename, line_no, callback) {
    fs.readFile(filename, async function(err, data) {
        if (err) throw err;

        // Data is a buffer that we need to convert to a string
        // Improvement: loop over the buffer and stop when the line is reached
        var lines = data.toString('utf-8').split("\n");
        if (+line_no > lines.length) {
            // console.log(lines.length);
            return callback('File end reached without finding line', null);
        }
        callback(null, lines[+line_no]);
        // /

    });
}




// include http module in the file
var http = require('http');

// create a server
http.createServer(async function(req, res) {
    console.log("Connected to client");
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var i = 0;
    while (true) {
        await get_line(filename, i, async function(err, line) {
            if (!err) {
                await res.write(line + "\n");
                i++;
            }
        })
    }
}).listen(9000);