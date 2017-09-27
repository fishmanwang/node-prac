var crypto = require('crypto');
var	ed = require('ed25519');

var pwd = '123456';
var data = 'abc';

var hash = crypto.createHash('sha256').update(data).digest();
var pwdHash = crypto.createHash('sha256').update(pwd).digest();

console.log('Data hash: ' + hash.toString('hex'));
console.log('Pwd hash: ' + pwdHash.toString('hex'));

var keypair = ed.MakeKeypair(pwdHash);
console.log(keypair);
console.log('PublicKey: ' + keypair.publicKey.toString('hex'));
console.log('PrivateKey: ' + keypair.privateKey.toString('hex'));

var signature = ed.Sign(hash, keypair);
console.log('Signature: ' + signature.toString('hex'));

var res = ed.Verify(hash, signature, keypair.publicKey);
console.log(res);