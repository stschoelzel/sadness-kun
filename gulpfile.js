const { series } = require('gulp');
const fs = require('fs-extra');




// Version für Zuhause

function clean(cb) {
  // body omitted
  return fs.remove('E:foundryvtt/UserData/Data/modules/sadness-kun');
  cb();
  }

function build(cb) {
  // body omitted
  fs.copySync("src","E:foundryvtt/UserData/Data/modules/sadness-kun")
  cb();
}


// Version für Remote

// function clean(cb) {
//     // body omitted
//     return fs.remove('E:foundryvtt/UserData/Data/modules/sadness-kun');
//     cb();
//     }
  
//   function build(cb) {
//     // body omitted
//     fs.copySync("src","E:foundryvtt/UserData/Data/modules/sadness-kun")
//     cb();
//   }
  

// function test(cb) {
//     // body omitted
//     console.log(path.dirname());
//     cb();
//   }
//
// exports.default = test;


exports.build = build;
exports.clean = clean;
exports.default = series(clean, build);

