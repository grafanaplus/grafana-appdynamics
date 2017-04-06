const gulp = require('gulp')
const ts = require('gulp-typescript')

const JSON_FILES = ['src/*.json', 'src/**/*.json']

const tsProject = ts.createProject('tsconfig.json')

gulp.task('compile', () => {
    const tsResult = tsProject.src()
    .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'))
});

gulp.task('assets', function() {
  return gulp.src(JSON_FILES)
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['compile'], () => {
    gulp.watch('src/**/*.ts', ['compile']);
})

gulp.task('default', ['watch', 'assets']);