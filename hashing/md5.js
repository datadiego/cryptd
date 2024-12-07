const crypto = require('crypto');

function encrypt(input) {
    return crypto.createHash('md5').update(input).digest('hex');
}

function compare(input, hash) {
    return crypt_md5(input) === hash;
}

module.exports = { encrypt, compare };