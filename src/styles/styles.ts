import { backgrounds } from './backgrounds';
import { dims, calc, toolbar, laserPointer } from './dims';
import { cascade } from './cascade';
import { colors } from './colors';
import { IFont, fonts, fontSizer } from './fonts';

export const styles = {
  backgrounds,
  cascade,
  colors,
  dims,
  toolbar,
  laserPointer,
  calc,
  fonts,
  fontSizer,
  html: {
    get: (font: IFont = 'inter', bgIndex = 0) => `
      html { margin: 0; }
      body {
        margin: 0;
        ${backgrounds.get(bgIndex)};
        -webkit-font-smoothing: antialiased;
        ${fonts[font].cssFamily};
      }`,
  },
  codeStyles: [
    'agate',
    'androidstudio',
    'atelier-cave-light',
    'atom-one-dark',
    'atom-one-light',
    'darcula',
    'docco',
    'github',
    'github-gist',
    'gml',
    'googlecode',
    'gradient-dark',
    'gradient-light',
    'grayscale',
    'hybrid',
    'ir-black',
    'lightfair',
    'mono-blue',
    'monokai',
    'monokai-sublime',
    'night-owl',
    'nnfx',
    'nnfx-dark',
    'railscasts',
    'rainbow',
    'xcode',
    'xt256',
    'zenburn',
  ],
};
