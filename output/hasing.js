const crypto = require("crypto");

const md5Hash = crypto.createHash("md5").update("pasword123").digest("hex");
console.log(md5Hash);

const sha256Hash = crypto
  .createHash("sha256")
  .update("pasword123")
  .digest("hex");

console.log(sha256Hash);

const sha512Hash = crypto
  .createHash("sha512")
  .update("password123")
  .digest("hex");

console.log(sha512Hash);
