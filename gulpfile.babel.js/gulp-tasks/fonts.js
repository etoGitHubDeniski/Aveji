'use strict';

import { paths } from '../config';
import { dest, src, task } from 'gulp';

task('fonts', () => {
  return src(paths.fonts.src).pipe(dest(paths.fonts.dest));
});
