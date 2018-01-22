const gulp = require("gulp");
const eslint = require("gulp-eslint");
const mocha = require("gulp-mocha");

gulp.task("default", ["lint", "test"]);

gulp.task("lint", function() {
  const sources = [
    "*.js",
    "models/*.js",
    "test/*.js"
  ];
  return gulp.src(sources)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("test", ["lint"], function() {
  const tests = [
    "test/*.js"
  ];
  const srcOpts = {
    read: false
  };
  return gulp.src(tests, srcOpts)
    .pipe(mocha({
      reporter: "list"
    }));
});
