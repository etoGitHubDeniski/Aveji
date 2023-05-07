'use strict';

export const paths = {
  root: './dist',

  views: {
    src: './src/views/pages/*.html',
    dest: './dist',
    watch: './src/views/**/*.html',
  },

  styles: {
    src: './src/scss/main.scss',
    dest: './dist/css',
    watch: './src/scss/**/*.scss',
  },

  scripts: {
    src: './src/js/main.js',
    dest: './dist/js',
    watch: './src/js/**/*.js',
  },

  images: {
    src: './src/images/',
    dest: './dist/images',
    watch: './src/images/**',
  },

  fonts: {
    src: './src/fonts/**/*.woff2',
    dest: './dist/fonts',
    watch: './src/fonts/**/*.woff2',
  },

  misc: {
    src: './src/misc/**',
    dest: './dist',
    watch: './src/misc/**',
  },
};

const production = process.argv.includes('--production');

export const props = {
  production: production,

  projectFolder: '/aveji',
  toDeploy: './dist/**',

  browserSync: {
    server: paths.root,
    host: '192.168.157.233',
    watch: true,
    open: false,
  },

  vinylftp: {
    host: '127.0.0.1',
    user: 'ftp',
    password: 'ftp',
    parallel: 10,
  },

  rename: {
    suffix: '.min',
  },

  fileinclude: {
    prefix: '@',
    basepath: '@file',
  },

  htmlmin: {
    collapseWhitespace: true,
  },

  sass: {
    outputStyle: 'compressed',
  },

  autoPrefixer: {
    cascade: false,
    grid: true,
  },
};
