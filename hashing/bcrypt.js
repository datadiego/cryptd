const bcrypt = require('bcrypt');

function encrypt(input) {
    const saltRounds = 10;
    return bcrypt.hashSync(input, saltRounds);
}

function compare(input, hash) {
    return bcrypt.compareSync(input, hash);
}

module.exports = { encrypt, compare };