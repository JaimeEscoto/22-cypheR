const encrypt = (data) => {
    let encryptedData = '';
    console.log(data);
    //data = decodeURIComponent(data);
    console.log(data);
    data.split('').forEach(function(c) {
        encryptedData += String.fromCharCode(c.charCodeAt(c) + 3);
    });

    return {
        encryptedData: encryptedData,
        decryptedData: data
    };;

}

const decrypt = (data) => {
    let decryptedData = '';
    //data = decodeURIComponent(data);
    data.split('').forEach(function(c) {
        decryptedData += String.fromCharCode(c.charCodeAt(c) - 3);
    });

    return {
        encryptedData: data,
        decryptedData: decryptedData
    };

}



module.exports = {

    encrypt: encrypt,
    decrypt: decrypt
}