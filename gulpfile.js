const gulp = require("gulp");
const shell = require("gulp-shell")
const del = require("del");

gulp.task("clean", function cleanTask() {
  return del([
    "build/**",
    "definitions/**"
  ], {
    force: true
  });
});

gulp.task("ts", gulp.series("clean", shell.task("tsc -p .\\/src")));

gulp.task("tslint", gulp.series(shell.task("eslint .\\/src")));

gulp.task("watch", gulp.series("clean", shell.task("tsc -p .\\/src --watch")));

gulp.task("build", gulp.series("tslint", "ts"));

gulp.task("default", gulp.series("build"));
