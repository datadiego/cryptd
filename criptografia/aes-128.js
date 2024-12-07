const crypto = require('crypto');

function encrypt(input, key) {
    const cipher = crypto.createCipher('aes128', key);
    let encrypted = cipher.update(input, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(input, key) {
    const decipher = crypto.createDecipher('aes128', key);
    let decrypted = decipher.update(input, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

module.exports = { encrypt, decrypt };