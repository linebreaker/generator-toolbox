import gulp from 'gulp';
import config from '../gulp_config.json';
import merge from 'merge-stream';

import loadPlugins from 'gulp-load-plugins';
const $ = loadPlugins();

/**
 * Deploy to GH pages
 */
export const single = () => {
  const singlesStreams = config.singles.map(single => {
    return gulp.src(single.source)
      .pipe(single.name ? $.rename(single.name) : $.util.noop())
      .pipe(gulp.dest(single.destination));
  });

  return merge(singlesStreams);
};

export const singleTask = gulp.task('single', single);
