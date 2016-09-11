var fs = require('fs');

fs.createReadStream('imooc.png').pipe(fs.createWriteStream('imooc_pipe.png'));