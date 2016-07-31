var gulp = require("gulp");
var del = require('del');

gulp.task("clean", function (cb) {
    del(["public/dist", "ui/todo/dist"], cb);
});

gulp.task("copy", function (cb) {
    gulp.src("ui/todo/dist/**").pipe(gulp.dest("public/dist"));
    gulp.src("ui/todo/node_modules/reflect-metadata/Reflect.js.map").pipe(gulp.dest("public/dist/vendor/reflect-metadata"));
    gulp.src("ui/todo/node_modules/font-awesome/fonts/**").pipe(gulp.dest("public/fonts"));
    // TODO: なぜかng build -prodでvendorに含まれないため一時的な対応
    gulp.src("ui/todo/node_modules/jquery/dist/jquery.js").pipe(gulp.dest("public/dist/vendor/jquery/dist/"));
    gulp.src("ui/todo/node_modules/underscore/underscore.js").pipe(gulp.dest("public/dist/vendor/underscore"));
});
