'use strict';

import { paths } from '../config';
import { dest, src, task } from 'gulp';

task('scripts', () => {
  return src(paths.scripts.src).pipe(dest(paths.scripts.dest));
});
