// Defining requirements
var gulp = require( 'gulp' );
var plumber = require( 'gulp-plumber' );
var sass = require( 'gulp-sass' );
var watch = require( 'gulp-watch' );
var cssnano = require( 'gulp-cssnano' );
var rename = require( 'gulp-rename' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );
var merge2 = require( 'merge2' );
var imagemin = require( 'gulp-imagemin' );
var ignore = require( 'gulp-ignore' );
var rimraf = require( 'gulp-rimraf' );
var clone = require( 'gulp-clone' );
var merge = require( 'gulp-merge' );
var sourcemaps = require( 'gulp-sourcemaps' );
var browserSync = require( 'browser-sync' ).create();
var del = require( 'del' );
var cleanCSS = require( 'gulp-clean-css' );
var gulpSequence = require( 'gulp-sequence' );
var replace = require( 'gulp-replace' );
var autoprefixer = require( 'gulp-autoprefixer' );

// Configuration file to keep your code DRY
var cfg = require( './gulpconfig.json' );
var paths = cfg.paths;



gulp.task('sass',  function () {
    // var stream = gulp.src('./sass/*.scss')
    var stream = gulp.src( paths.sass_src + '/*.scss' )    
    .pipe(plumber())
	.pipe(sourcemaps.init()) // add this
        .pipe(sass())
	.pipe(sourcemaps.write('./', {includeContent: false})) // add this
	.pipe(sourcemaps.init({loadMaps: true})) // add this
        .pipe(gulp.dest(paths.css))
        .pipe(rename('custom-editor-style.css'))
	.pipe(gulp.dest(paths.css)); // add this
    return stream;
});


// Run:
// gulp watch
// Starts watcher. Watcher runs gulp sass task on changes
gulp.task( 'watch', function() {
    gulp.watch( paths.sass_src + '/**/*.scss', ['styles'] );
    gulp.watch( paths.js_src + '/*.js',  ['scripts'] );
});

// Run:
// gulp cssnano
// Minifies CSS files
gulp.task( 'cssnano', function() {
  return gulp.src( paths.css + '/theme.css' )
    .pipe( sourcemaps.init( { loadMaps: true } ) )
    .pipe( plumber( {
            errorHandler: function( err ) {
                console.log( err );
                this.emit( 'end' );
            }
        } ) )
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( cssnano( { discardComments: { removeAll: true } } ) )
    .pipe( sourcemaps.write( './' ) )
    .pipe( gulp.dest( paths.css ) );
});

gulp.task( 'minifycss', function() {
  return gulp.src( paths.css + '/theme.css' )
  .pipe( sourcemaps.init( { loadMaps: true } ) )
    .pipe( cleanCSS( { compatibility: '*' } ) )
    .pipe( plumber( {
            errorHandler: function( err ) {
                console.log( err ) ;
                this.emit( 'end' );
            }
        } ) )
    .pipe( rename( { suffix: '.min' } ) )
     .pipe( sourcemaps.write( './' ) )
    .pipe( gulp.dest( paths.css ) );
});



gulp.task( 'styles', function( callback ) {
    gulpSequence( 'sass', 'minifycss' )( callback );
} );


// Run: 
// gulp scripts. 
// Uglifies and concat all JS files into one
gulp.task( 'scripts', function() {
    var scripts = paths.js_packages_list;
  gulp.src( scripts )
    .pipe( concat( 'theme.min.js' ) )
    .pipe( uglify() )
    .pipe( gulp.dest( paths.js ) );

  gulp.src( scripts )
    .pipe( concat( 'theme.js' ) )
    .pipe( gulp.dest( paths.js ) );
});
