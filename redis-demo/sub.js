const client = require('./client');
client.subscribe('pub');
client.on('message', (channel, reply) => {
   console.log(channel);
   console.log(reply);
});