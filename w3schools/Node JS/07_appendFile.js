var fs = require('fs');

// If the file does not exist
// it will be created
fs.appendFile('data/1.txt', 'Hello content!'
               , function (err) {
                    if(err) throw err;
                    console.log('Saved!');
});
