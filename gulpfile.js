'use strict';

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {src, dest} from 'gulp';
import rename from 'gulp-rename';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import cheerio from 'gulp-cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  basetheme: {
    root: __dirname,
    build: __dirname + '/assets/',
    icons: __dirname + '/assets/icons/',
  },
};

options.icons = {
  src: options.basetheme.root + '/src/icons/',
  dest: options.basetheme.icons,
};

function spriteIcons() {
  return src(options.icons.src + '*.svg')
    .pipe(svgmin())
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename('icons.svg'))
    .pipe(cheerio({
      run: function ($, file) {
        $('svg').addClass('hide');
      },
      parserOptions: {xmlMode: true},
    }))
    .pipe(dest(options.icons.dest));
}

export default spriteIcons;
