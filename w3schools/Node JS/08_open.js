var fs = require('fs');

// If the file does not exist
// an empty file will be created
fs.open('data/2.txt', 'w', 
        function (err, file) {
            if (err) throw err;
            console.log('Saved!');
        }
);
