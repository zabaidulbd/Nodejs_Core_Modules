const path = require("path");

// current file information.......

console.log("current file name", __filename);
console.log("current directory", __dirname);

const filePath = "/zabaidul/documents/learnNode.pdf";

console.log("directory", path.dirname(filePath));
console.log("basename", path.basename(filePath));
console.log("extension", path.extname(filePath));
console.log(
  "file name without extension",
  path.basename(filePath, path.extname(filePath))
);

const parsed = path.parse(filePath);

console.log("parsed object", parsed);

console.log("formated path", path.format(parsed));
