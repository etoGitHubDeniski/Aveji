'use strict';

import { paths } from '../config';
import { dest, src, task } from 'gulp';
import imagemin from 'gulp-imagemin';

task('images', () => {
  src(paths.images.src + '**/*.svg')
    .pipe(imagemin())
    .pipe(dest(paths.images.dest));
  return src([
    paths.images.src + '**',
    '!' + paths.images.src + '**/*.svg',
  ]).pipe(dest(paths.images.dest));
});
