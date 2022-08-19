const { series } = require('gulp');
const fs = require('fs-extra');
const debug = require('gulp-debug');
const path = require('path');



// Version für Zuhause

function clean(cb) {
  // body omitted
  debug();
  return fs.remove('E:foundryvtt/UserData/Data/modules/sadness-kun');
  cb();
  }

function build(cb) {
  // body omitted
  fs.copySync("src","E:foundryvtt/UserData/Data/modules/sadness-kun")
  cb();
}

function test(cb) {
    // body omitted
    console.log(path.dirname());
    cb();
  }

// Version für Remote

exports.build = build;
exports.clean = clean;
// exports.default = series(clean, build);
exports.default = test;