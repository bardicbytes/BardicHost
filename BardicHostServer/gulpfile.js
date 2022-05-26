var gulp = require('gulp');
var ts = require('gulp-typescript');

const pug = require('pug');

exports.default = defaultTask;
exports.build = buildTask;

function defaultTask(cb) {
    console.log("gulp default task");
    cb();
  }
  
  function buildTask(cb) {
    let pfunc = pug.compileFile('./pugs/index.pug');
    //console.log("gulp build\n"+pfunc);
    cb();
  }
