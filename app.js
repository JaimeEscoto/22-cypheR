const cypheR = require('./logyc/cypheR');



let data = 'Jaime Escoto';

let encryptedData = cypheR.encrypt(data);

console.log(encryptedData);

console.log(cypheR.decrypt(encryptedData.encrypted).decryptedData);