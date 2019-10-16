const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    db_Prod_Dev:process.env.PRODUCTION,
    TEST_DB:process.env.TEST_DB,
    PRODUCTION_DB:process.env.PRODUCTION_DB,
    HASH_SALT:process.env.HASH_SALT,
    MAIL_USER:process.env.MAIL_USER,
    MAIL_PASS:process.env.MAIL_PASS,
    MAIL_EMAIL:process.env.MAIL_EMAIL
}