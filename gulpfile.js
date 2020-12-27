/**
 * This module publishes assets from the `node_modules`
 * folder in `public/css` so they are accessible from the web
 * application.
 */

const { src, dest } = require('gulp');
const { babel } = require('gulp-babel');

function build(callback) {
  src('node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(dest('public/css/'));

  callback();
}

exports.build = build;
