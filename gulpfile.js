var path = require("path");
var gulp = require("gulp");
var less = require("gulp-less");
var watch = require("gulp-watch");
var server = require("gulp-server-livereload");

gulp.task("less", function () {
	return gulp.src("./less/*.less")
		.pipe(less())
		.pipe(gulp.dest("./css"))
});

gulp.task("watch", function () {
	gulp.watch("./less/**/*.less", ["less"]);
});

gulp.task("webserver", function() {
	gulp.src("./")
		.pipe(server({
      		livereload: true,
      		directoryListing: true,
      		open: true
    	}));
});

gulp.task("default", ["less", "watch", "webserver"]);
