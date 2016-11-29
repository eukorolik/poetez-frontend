var path = require('path');
var fs = require('fs');

const patchRoot = __dirname;
const projectRoot = path.resolve(__dirname, '../../');
const nodeModules = path.resolve(projectRoot, 'node_modules');

read(path.resolve(patchRoot, 'css-loader', 'getLocalIdent.js'), function (data) {
  write(path.resolve(nodeModules, 'css-loader', 'lib', 'getLocalIdent.js'), data);
});

function read(path, callback) {
  fs.readFile(path, 'utf8', function (err, data) {
    if (err) throw err;
    callback(data);
  });
}

function write(path, data) {
  fs.writeFile(path, data, 'utf8', function (err) {
    if (err) throw err;
  });
}