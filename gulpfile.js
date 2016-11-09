const path = require("path");
const gulp = require("gulp");
const less = require("gulp-less");
const watch = require("gulp-watch");
const server = require("gulp-server-livereload");

gulp.task("less", () => {
	return gulp.src("./less/*.less")
		.pipe(less({
			compress: false
		}))
		.pipe(gulp.dest("./css"));
});

gulp.task("watch", () => {
	gulp.watch("./less/**/*.less", ["less"]);
});

gulp.task("webserver", () => {
	gulp.src("./")
		.pipe(server({
      		livereload: true,
      		directoryListing: true,
      		open: true
    	}));
});

gulp.task("default", ["less", "watch", "webserver"]);
