// Node.js socket client script
const net = require('net');
// Connect to a server @ port 9898
const client = net.createConnection({ port: 9000 }, () => {
  console.log('CLIENT: I connected to the server.');
  // client.write('CLIENT: Hello this is client!');
});
client.on('data', async function(data) {
  console.log(data.toString());

  if(data.toString() == "end"){
  client.end();
}
});
client.on('end', () => {
  console.log('CLIENT: I disconnected from the server.');
});