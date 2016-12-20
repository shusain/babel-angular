const gulp = require('gulp');
const babel = require('gulp-babel');

//It copies all the source files into the dist folder make more specific globs for real project
gulp.task('copysources', () => gulp.src('src/**/*').pipe(gulp.dest('dist')));

//It compiles the source es6/es2015 bits into JS
gulp.task('babelify', ['copysources'], () => {
    return gulp.src('src/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

//It processes the files for execution/deployment
gulp.task('default', ['babelify'])

//It does nothing more