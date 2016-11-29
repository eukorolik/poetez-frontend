/*
 MIT License http://www.opensource.org/licenses/mit-license.php
 Author Tobias Koppers @sokra
 */
var path = require("path");
var kebabCase = require('kebab-case');

module.exports = function getLocalIdent(loaderContext, localIdentName, localName, options) {
  if(!options.context)
    options.context = loaderContext.options
    && typeof loaderContext.options.context === "string"
      ? loaderContext.options.context
      : loaderContext.context;
  localIdentName = localIdentName.replace(/\[local\]/gi, localName);
  const name = kebabCase(path.basename(loaderContext.resourcePath).split('.')[0]).substr(1);
  return localIdentName.replace(/\[name\]/gi, name);
};
