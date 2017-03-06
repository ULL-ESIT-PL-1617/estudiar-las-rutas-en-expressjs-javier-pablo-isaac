var ghpages = require('gh-pages');
var gulp = require('gulp');
var path = require('path');
var exec = require('child_process').exec;

gulp.task('ejemplo1', function() {
	var child = exec('node ./src/ejemplo1.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo2_1', function() {
	var child = exec('node ./src/ejemplo2_1.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo2_2', function() {
	var child = exec('node ./src/ejemplo2_2.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo2_3', function() {
	var child = exec('node ./src/ejemplo2_3.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo2_4', function() {
	var child = exec('node ./src/ejemplo2_4.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo2_5', function() {
	var child = exec('node ./src/ejemplo2_5.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo4_1', function() {
	var child = exec('node ./src/ejemplo4_1.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo4_2', function() {
	var child = exec('node ./src/ejemplo4_2.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo4_3', function() {
	var child = exec('node ./src/ejemplo4_3.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo4_4', function() {
	var child = exec('node ./src/ejemplo4_4.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo4_5', function() {
	var child = exec('node ./src/ejemplo4_5.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo3_1', function() {
	var child = exec('node ./src/ejemplo3_1.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo3_2', function() {
	var child = exec('node ./src/ejemplo3_2.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo3_3', function() {
	var child = exec('node ./src/ejemplo3_3.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});

gulp.task('ejemplo3_4', function() {
	var child = exec('node ./src/ejemplo3_4.js', function(error, stdout, stderr) {

		if (error) {
 		   console.error(`exec error: ${error}`);
    		   return;
 		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});
});


gulp.task('deploy', function() {
ghpages.publish(path.join(__dirname, '_book'), function(err) {
      console.log('publicado en gh-pages');
    });
  });
