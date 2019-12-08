var fs = require('fs');

fs.unlink('data/4.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});
