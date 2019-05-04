// Defining requirements
var gulp = require( 'gulp' );
var plumber = require( 'gulp-plumber' );
var scss = require( 'gulp-sass' );
var watch = require( 'gulp-watch' );
var rename = require( 'gulp-rename' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );
var imagemin = require( 'gulp-imagemin' );
var sourcemaps = require( 'gulp-sourcemaps' );
var gulpSequence = require( 'gulp-sequence' );
var autoprefixer = require( 'gulp-autoprefixer' );
var cleanCSS = require( 'gulp-clean-css' );

// Configuration file to keep your code DRY
var cfg = require( './gulpconfig.json' );
var paths = cfg.paths;

// Run:
// gulp scss
// Compiles SCSS files in CSS
gulp.task( 'scss', function() {
    var stream = gulp.src( paths.scss + '/*.scss' ) 
        .pipe( plumber( {
            errorHandler: function( err ) {
                console.log( err );
                this.emit( 'end' );
            }
        } ) )
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe( scss( { errLogToConsole: true } ) )
        .pipe( autoprefixer( 'last 2 versions' ) )
        .pipe(sourcemaps.write(undefined, { sourceRoot: null }))
        .pipe( gulp.dest( paths.css ) )
    return stream;
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
gulp.task( 'cleancss', function() {
return gulp.src( paths.css + '/*.min.css', { read: false } ) // Much faster
    .pipe( ignore( 'theme.css' ) )
    .pipe( rimraf() );
});



// Run:
// gulp watch
// Starts watcher. Watcher runs gulp scss task on changes
gulp.task( 'watch', function() {
    gulp.watch( paths.scss + '/**/*.scss', ['styles'] );
    gulp.watch( [paths.dev + '/js/**/*.js', 'js/**/*.js', '!js/theme.js', '!js/theme.min.js'], ['scripts'] );
}); 


// Run:
// gulp imagemin
// Running image optimizing task
gulp.task( 'imagemin', function() {
    gulp.src( paths.imgsrc + '/**' )
    .pipe( imagemin() )
    .pipe( gulp.dest( paths.img ) );
});

gulp.task( 'styles', function( callback ) {
    gulpSequence( 'scss', 'minifycss' )( callback );
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


// Run:
// gulp copy-assets.
// Copy all needed dependency assets files from bower_component assets to themes /js, /scss and /fonts folder. Run this task after bower install or bower update
gulp.task('default', ['watch']);
