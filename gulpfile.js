var gulp = require("gulp");
var del = require('del');

gulp.task("clean", function (cb) {
    del(["public/dist", "ui/todo/dist"], cb);
});

gulp.task("copy", function (cb) {
    gulp.src("ui/todo/dist/**").pipe(gulp.dest("public/dist"));
});
