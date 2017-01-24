const client = require('./client');
client.on('error' ,(err) => {
    console.log(err);
});
client.set('hello', 'this is a world');
client.get('hello', (err, reply) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(reply);
} )