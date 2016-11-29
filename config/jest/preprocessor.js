var fs = require('fs');
var tsc = require('typescript');
var tsConfig = require('../../tsconfig.json');
var babel = require('babel-core');
var babelConfig = JSON.parse(fs.readFileSync('./.babelrc', 'utf8'));

module.exports = {
  process: function (src, path) {
    var precompiled = tsc.transpile(
      src,
      tsConfig.compilerOptions,
      path,
      []
    );

    return babel.transform(precompiled, babelConfig).code;
  }
};
