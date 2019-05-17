var gulp = require('gulp');
var browserify = require('gulp-browserify');
// var reactify = require('reactify');
var browserSync = require('browser-sync').create()
var reload = browserSync.reload;

gulp.task('scripts', function() {

    gulp.src('src/app.js')
    .pipe(browserify({
        insertGlobals: false,
        debug: true
    }))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());    
});

gulp.task('serve', function() {
    browserSync.init({server: './dist'});
});

gulp.task('watch', function() {
    gulp.watch(['src/**/*.js', 'src/**/*.jsx'], ['scripts']);
    gulp.watch("src/**/*.js").on('change', reload);
});

gulp.task('default', [ 'scripts', 'serve', 'watch' ]);