var fs = require('fs');

// If the file exists
// its content will be replaced.
// If does not exist
// it will be created.
fs.writeFile('data/3.txt', 'Hello content!', 
             function (err) {
                if (err) throw err;
                console.log('Saved');
             }
);
