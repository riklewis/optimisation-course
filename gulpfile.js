var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var optimize = require("gulp-optimize-js");
var maps = require("gulp-sourcemaps");
var pump = require("pump");

gulp.task("default",["root","js"]);

gulp.task("root",function(cb) {
  gulp.src("index.htm")
    .pipe(gulp.dest("build"));
});

gulp.task("js",function(cb) {
  pump([
    gulp.src(["js/optimisation.js","js/debug.js"]),
    maps.init(),
    concat("script.js"),
    uglify(),
    optimize(),
    maps.write(),
    gulp.dest("build/js")
  ]);
});
