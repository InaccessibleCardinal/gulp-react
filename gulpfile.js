var gulp = require('gulp');
var browserify = require('gulp-browserify');
var reactify = require('reactify');

gulp.task('scripts', function() {
    gulp.src('src/app.js')
.pipe(browserify({
        insertGlobals: false,
        debug: true,
        transform: [reactify]
    }))
    .pipe(gulp.dest('./dist/js'));    
});

gulp.task('watch', function() {
    gulp.watch(['src/**/*.js', 'src/**/*.jsx'], [ 'scripts' ]);
});

gulp.task('default', [ 'scripts', 'watch' ]);