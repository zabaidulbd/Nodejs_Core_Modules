const fs = require("fs");

// fs.writeFileSync("./temp.txt", "this is a temp file");
// console.log("temp file created");

// if (fs.existsSync("./temp.txt")) {
//   console.log("file exits");
//   fs.unlinkSync("./temp.txt");
//   console.log("file deleted");
// }

// delete any file asycronous ly....

fs.writeFile("./temp2.txt", "this is another temp file", (err) => {
  console.log("another temp file created");
  fs.unlink("./temp2.txt", (err) => {
    if (err) {
      console.error("Error:", err.message);
    } else {
      console.log("temp 2 deleted");
    }
  });
});
