const crypto = require('crypto');

function anotherInsecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  // Generate a cryptographically secure random float between 0 and 1
  var buf = crypto.randomBytes(4);
  var suffix = buf.readUInt32BE(0) / 0x100000000;
  var password = "sssAAAA" + suffix;
  return password;
}