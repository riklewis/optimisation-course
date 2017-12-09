var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task("default",["root","js"]);

gulp.task("root",function(cb) {
  gulp.src("index.htm")
    .pipe(gulp.dest("build"));
});

gulp.task("js",function(cb) {
  gulp.src(["js/optimisation.js","js/debug.js"])
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(gulp.dest("build/js"));
});
