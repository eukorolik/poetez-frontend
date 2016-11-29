var path = require('path');
var fs = require('fs');

const patchRoot = __dirname;
const projectRoot = path.resolve(__dirname, '../../');
const nodeModules = path.resolve(projectRoot, 'node_modules');

/* css-loader */
read(path.resolve(patchRoot, 'css-loader', 'getLocalIdent.js'), function (data) {
  write(path.resolve(nodeModules, 'css-loader', 'lib', 'getLocalIdent.js'), data);
});

/* babel-plugin-transform-react-jsx-source */
read(path.resolve(patchRoot, 'babel-plugin-transform-react-jsx-source', 'index.js'), function (data) {
  write(path.resolve(nodeModules, 'babel-plugin-transform-react-jsx-source', 'lib', 'index.js'), data);
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
