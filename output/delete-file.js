const fs = require("fs");

fs.writeFileSync("./temp.txt", "this is a temp file");
console.log("temp file created");

if (fs.existsSync("./temp.txt")) {
  console.log("file exits");
  fs.unlinkSync("./temp.txt");
  console.log("file deleted");
}
