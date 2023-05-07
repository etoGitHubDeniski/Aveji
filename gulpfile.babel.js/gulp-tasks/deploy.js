'use strict';

import { paths, props } from '../config';
import { src, task } from 'gulp';
import vinylftp from 'vinyl-ftp';

task('deploy', () => {
  const conn = vinylftp.create(props.vinylftp);

  return src(props.toDeploy, {
    base: paths.root,
    buffer: false,
    dot: true,
  })
    .pipe(conn.newer(props.projectFolder))
    .pipe(conn.dest(props.projectFolder));
});
