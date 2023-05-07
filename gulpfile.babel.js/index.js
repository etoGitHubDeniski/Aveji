'use strict';

import { parallel, series } from 'gulp';
import requireDir from 'require-dir';

requireDir('./gulp-tasks');

export const build = parallel([
  'views',
  'styles',
  'scripts',
  'images',
  'fonts',
  'misc',
]);

export const dev = series(
  parallel(['views', 'styles', 'scripts']),
  series('watch'),
);

export default series('clean', build);
