/**
 * Created by Masum on 12/13/2015.
 */
var gulp = require ( 'gulp' );
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
//var uglify = require('gulp-uglify');


/** Processes AngularJS code for concation and minify */
gulp.task('default', function() {
    return gulp.src(['public/app/app.js', 'public/app/services/*.js', 'public/app/directives/*.js', 'public/app/dashboard/*.controller.js'])
        .pipe(concat('app.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('public/scripts'))
});