import { css } from '@emotion/react';
import { IMinMax, calc } from './dims';

export interface IFontData {
  atImport: string;
  cssFamily: string;
}

export type IFont =
  | 'architectsDaughter'
  | 'inknutAntiqua'
  | 'inter'
  | 'montserrat'
  | 'sourceSerifPro';

export type IFonts = { [name in IFont]: IFontData };

export const fonts: IFonts = {
  architectsDaughter: {
    atImport: `@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');`,
    cssFamily: `font-family: 'Architects Daughter', cursive;`,
  },
  inknutAntiqua: {
    atImport: `@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@600&display=swap');`,
    cssFamily: `font-family: 'Inknut Antiqua', serif;`,
  },
  inter: {
    atImport: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');`,
    cssFamily: `font-family: 'Inter', sans-serif;`,
  },
  montserrat: {
    atImport: `@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');`,
    cssFamily: `font-family: 'Montserrat', sans-serif;`,
  },
  sourceSerifPro: {
    atImport: `@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap');`,
    cssFamily: `font-family: 'Source Serif Pro', serif;`,
  },
};

export interface IFontDims extends IMinMax {
  lh: number; // line-height in "em"
}

export type IEleKind = 'h1' | 'h2' | 'h3' | 'p' | 'code' | 'li' | 'liGap' | 'th' | 'td';

export type IFontSize = { [ele in IEleKind]: IFontDims };

class FontSizer {
  constructor(
    private sf = 1.0,
    private size: IFontSize = {
      h1: { min: 24, max: 100, lh: 1.2 },
      h2: { min: 18, max: 80, lh: 1.2 },
      h3: { min: 16, max: 60, lh: 1.2 },
      p: { min: 14, max: 40, lh: 1.7 },
      code: { min: 12, max: 30, lh: 1.5 },
      li: { min: 12, max: 30, lh: 1.2 },
      liGap: { min: 6, max: 18, lh: 1.2 },
      th: { min: 12, max: 30, lh: 1.2 },
      td: { min: 12, max: 30, lh: 1.2 },
    },
  ) {}

  setScaleFactor = (value: number) => (this.sf = value);

  setSize = (ele: IEleKind, { min, max }: IMinMax) => {
    this.size[ele].min = min;
    this.size[ele].max = max;
  };

  cssAll = () => css`
    h1 {
      ${this.fszCss('h1')}
      ${this.lhCss('h1')}
    }
    h2 {
      ${this.fszCss('h2')}
      ${this.lhCss('h2')}
    }
    h3 {
      ${this.fszCss('h3')}
      ${this.lhCss('h3')}
    }
    p {
      ${this.fszCss('p')}
      ${this.lhCss('p')}
    }
    code {
      ${this.fszCss('code')}
      ${this.lhCss('code')}
    }
    li {
      ${this.fszCss('li')}
      ${this.lhCss('li')};
      margin: 0 0 ${calc(this.size.liGap)} 0;
    }
    th {
      ${this.fszCss('th')}
      ${this.lhCss('th')}
    }
    td {
      ${this.fszCss('td')}
      ${this.lhCss('td')}
    }
  `;

  lhCss = (ele: IEleKind): string => `line-height: ${this.size[ele].lh}em;`;

  fszCss = (ele: IEleKind): string =>
    this.pFszCss({
      min: this.size[ele].min * this.sf,
      max: this.size[ele].max * this.sf,
    });

  private pFszCss = (minmax: IMinMax) => `font-size: ${calc(minmax)};`;
}

export const fontSizer = new FontSizer();
