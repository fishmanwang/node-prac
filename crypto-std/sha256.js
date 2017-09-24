var crypto = require('crypto');

var data = '123456';

var hash = crypto.createHash('sha256').update(data).digest(); // Buffer
//var hash = crypto.createHash('sha256').update(data).digest('hex'); // String

console.log(hash);
console.log(hash.toString('hex'));