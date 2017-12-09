var gulp = require("gulp");

gulp.task("default",["root"]);

gulp.task("root",function(cb) {
  gulp.src("index.htm")
    .pipe(gulp.dest("build"));
});
