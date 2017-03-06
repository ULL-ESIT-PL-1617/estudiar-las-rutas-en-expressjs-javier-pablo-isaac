
var gulp = require('gulp');
var path = require('path');
var exec = require('child_process').exec;

gulp.task('ejemplo2_1', function() {
	var child = exec('sudo node ./ejemplo2_1.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
  		console.log(`stdout: ${stdout}`);
  		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo2_2', function() {
	var child = exec('sudo node ./ejemplo2_2.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
  		console.log(`stdout: ${stdout}`);
  		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo2_3', function() {
	var child = exec('sudo node ./ejemplo2_3.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
  		console.log(`stdout: ${stdout}`);
  		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo2_4', function() {
	var child = exec('sudo node ./ejemplo2_4.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
  		console.log(`stdout: ${stdout}`);
  		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo2_5', function() {
	var child = exec('sudo node ./ejemplo2_5.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
  		console.log(`stdout: ${stdout}`);
  		console.log(`stderr: ${stderr}`);
	});
});
