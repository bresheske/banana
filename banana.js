const crypto = require('crypto');

/**
 * returns the string form of the banana.
 */
const toString = () => 'banana';

/**
 * returns the constant banana.
 */
const banana = () => toString();

/**
 * hashes a banana
 */
const md5 = () => crypto.createHash('md5').update(banana()).digest('hex');

/**
 * creates a fresh-peeled banana.
 */
const symbol = () => '🍌';

/**
 * creates a bunch of bananas.
 */
const bunch = () => `${symbol()}${symbol()}${symbol()}`;

/**
 * the lolcat asks for a banana.
 */
const catAsk = () => `😺 i can haz banana?`;

/**
 * the lolcat has been given a banana.
 */
const cat = () => `😺🍌`;

/**
 * peels a banana.
 */
const peel = () => `peeled ${banana()}`;

/**
 * eats a banana until it's all gone.
 */
const nom = () => undefined;

/**
 * a nice json banana.
 */
const json = () => ({ banana: banana() });

/**
 * gives bananas anyway. we don't want any oranges here.
 */
const orange = () => banana();

module.exports = {
    toString,
    banana,
    md5,
    symbol,
    bunch,
    catAsk,
    cat,
    peel,
    nom,
    json,
    orange
};
