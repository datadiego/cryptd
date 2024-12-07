const crypto = require('crypto');

function encrypt(input) {
    return crypto.createHash('md4').update(input).digest('hex');
}

function compare(input, hash) {
    return crypt_md4(input) === hash;
}

module.exports = { encrypt, compare };