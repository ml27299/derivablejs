var Promise = require('promise');
var rollup = require('rollup');
var fs = require('fs');
var path = require('path');

module.exports = function (entry, destDir) {
  return rollup.rollup({
    // The bundle's starting point. This file will be
    // included, along with the minimum necessary code
    // from its dependencies
    entry: entry
  }).then(function (bundle) {
    // Alternatively, let Rollup do it for you
    // (this returns a promise). This is much
    // easier if you're generating a sourcemap
    return bundle.write({
      format: 'cjs',
      dest: path.join(destDir, 'derivable.js'),
    });
  });
};