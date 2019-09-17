const encrypt = (data) => {
    let encryptedData = '';

    data.split('').forEach(function(c) {
        encryptedData += String.fromCharCode(c.charCodeAt(c) + 3);
    });

    return {
        encrypted: encryptedData,
        decryptedData: data
    };;

}

const decrypt = (data) => {
    let decryptedData = '';

    data.split('').forEach(function(c) {
        decryptedData += String.fromCharCode(c.charCodeAt(c) - 3);
    });

    return {
        encrypted: data,
        decryptedData: decryptedData
    };

}



module.exports = {

    encrypt: encrypt,
    decrypt: decrypt
}