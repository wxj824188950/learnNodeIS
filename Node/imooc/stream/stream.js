var fs = require('fs');

var source = fs.readFileSync('../buffer/imooc.png');

fs.writeFileSync('stream_copy_imooc.png', source);