const client = require('./client');
// client.lpush('list', 2);
client.lpop('list', (err, reply) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(reply);
});
client.rpop('list', (err, reply) => {
   if(err) {
       console.log(err);
       return;
   }
   console.log(reply);
});
client.lrange('list',0,-1, (err, reply) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(reply);
});