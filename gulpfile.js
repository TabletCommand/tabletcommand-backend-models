const gulp = require("gulp");
const eslint = require("gulp-eslint");
const mocha = require("gulp-mocha");

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

gulp.task("test", gulp.series("lint", function() {
  const tests = [
    "test/*.js"
  ];
  const srcOpts = {
    read: false
  };
  return gulp.src(tests, srcOpts)
    .pipe(mocha({
      reporter: "list",
      exit: true
    }));
}));

gulp.task("default", gulp.series("lint", "test", function(done) {
  console.log("All Tests have completed");
  done();
}));
