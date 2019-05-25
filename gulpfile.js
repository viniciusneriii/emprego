var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return sass ('sass/*.sass').pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    gulp,watch ('sass/*.sass', ['sass']);
});

gulp.task('default', function(){
    console.log('ola code')
});

