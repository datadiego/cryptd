const crypto = require('crypto');

function encrypt(input) {
    return crypto.createHash('sha1').update(input).digest('hex');
}

function compare(input, hash) {
    return encrypt(input) === hash;
}

module.exports = { encrypt, compare };