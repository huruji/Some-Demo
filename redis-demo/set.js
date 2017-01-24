const client = require('./client');

client.sadd('set', 1);
client.sadd('set', 'a');
client.sadd('set', 'b');

client.smembers('set', (err, reply) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(reply);
});