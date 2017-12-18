var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var optimize = require("gulp-optimize-js");
var maps = require("gulp-sourcemaps");
var pump = require("pump");
var cleancss = require("gulp-clean-css");

gulp.task("default",["root","js","css"]);

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
    maps.write("../maps"),
    gulp.dest("build/js")
  ]);
});

gulp.task("css",function(cb) {
  pump([
    gulp.src(["css/*.css"]),
    maps.init(),
    concat("style.css"),
    cleancss({level:{1:{specialComments:0},2:{removeDuplicateRules:true}}}),
    maps.write("../maps"),
    gulp.dest("build/css")
  ]);
});
