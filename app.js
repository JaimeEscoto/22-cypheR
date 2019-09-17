const cypheR = require('./logyc/cypheR');



let datos = 'Jaime';

let encryptedData = cypheR.encrypt(datos);

console.log(encryptedData);

console.log(cypheR.decrypt(encryptedData));