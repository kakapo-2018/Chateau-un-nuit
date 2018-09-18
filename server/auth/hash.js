//Get sodium from an api dependency
const sodium = require('sodium').api;

//export generate function
module.exports = {
  generate
};

//function to generate password for exporting
function generate(password) {
  const passwordBuffer = Buffer.from(password, 'utf8');
  return sodium.crypto_pwhash_str(
    passwordBuffer,
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
  );
}
