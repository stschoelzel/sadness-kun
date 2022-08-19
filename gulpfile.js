const { series } = require("gulp");
const fs = require("fs-extra");


clean = (cb) => {
  return fs.remove("E:foundryvtt/UserData/Data/modules/sadness-kun");
  cb();
};

build = (cb) => {
  fs.copySync("src", "E:foundryvtt/UserData/Data/modules/sadness-kun");
  cb();
};


exports.build = build;
exports.clean = clean;

exports.default = series(clean, build);
