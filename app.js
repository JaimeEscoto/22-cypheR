const cypheR = require('./logyc/cypheR');



let data = 'Hola%20que%20tal%20esta%3F%25';

let encryptedData = cypheR.encrypt(data);

console.log(encryptedData);

//console.log(cypheR.decrypt(encryptedData.encrypted).decryptedData);