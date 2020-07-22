const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("default", () =>
  gulp
    .src("js/form.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(gulp.dest("dist"))
);
