var child_process = require('child_process');
var child = child_process.spawn( 'node support.js' );
child.stdout.on('data', function(data) {
  console.log(data);
});