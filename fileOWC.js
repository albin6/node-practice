const fs = require("fs");

fs.open("text.txt", 'w', (err, fd) => {
  if (err) {
    console.log(err);
  }
  console.log("file opened successfully");
  const content = "this is the content to write";
  fs.write(fd, content, (err, written) => {
    if (err) {
      console.log(err);
    }
    console.log("content writed successfully");
    fs.close(fd, (err) => {
      if (err) {
        console.log(err);
      }
      console.log('file close')
    });
  });
})
