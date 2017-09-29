var ed = require('ed25519');
var crypto = require('crypto');
var bignum = require('../bignum');

var secret = '123abc';

var hash = crypto.createHash('sha256').update(secret).digest();

console.log('Hash: ' + hash.toString('hex'));

var keypair = ed.MakeKeypair(hash);
console.log(keypair);

var publicKey = keypair.publicKey.toString('hex');
console.log('publicKey: ' + publicKey);
var publicKeyHash = crypto.createHash('sha256').update(publicKey, 'hex').digest();
console.log('publicKeyHash: ' + publicKeyHash);

var temp = new Buffer(8);
for (var i=0; i<8; i++) {
    temp[i] = publicKeyHash[7-i];
}
console.log('temp: ' + temp.toString('hex'));

var address = bignum.fromBuffer(temp).toString() + 'L';
console.log('address: ' + address);