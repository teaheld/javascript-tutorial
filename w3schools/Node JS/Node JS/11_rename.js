var fs = require('fs');

fs.rename('data/5.txt', 'data/05.txt', 
          function (err) {
              if (err) throw err;
              console.log('File renamed!');
          }
);
