const fs = require("fs");

fs.writeFile(
  "text.txt",
  "This text is newly writed and which overwrite the existing once",
  (err) => {
    if (err) {
      console.log(err);
    } else {
        console.log('file re-writed successfully')
    }
  }
);
