const gulp = require('gulp')
const ts = require('gulp-typescript')

const JSON_FILES = ['src/*.json', 'src/**/*.json']

const tsProject = ts.createProject('tsconfig.json')

gulp.task('compile', () => {
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'))
});

gulp.task('assets', function () {
    return gulp.src(JSON_FILES)
        .pipe(gulp.dest('dist'));
});

gulp.task('partials', function () {
    return gulp.src(['src/datasource-appdynamics/partials/*'])
        .pipe(gulp.dest('dist/datasource-appdynamics/partials/'));
});

gulp.task('watch', ['compile'], () => {
    gulp.watch('src/**/*.ts', ['compile']);
    gulp.watch('src/**/*.json', ['assets']);
    gulp.watch('src/datasource-appdynamics/partials/*', ['partials']);
})

gulp.task('default', ['watch', 'assets', 'partials']);