// hefo means header + footer

export interface IMinMax {
  min: number;
  max: number;
}

export const dims = {
  maxPageWidth: 3840,
  viewport: {
    aspectRatio: 16.0 / 9.0,
    min: 320,
    max: 1920,
  },
  header: {
    height: '100px',
  },
  footer: {
    height: '100px',
  },
  warning: {
    height: '50px',
  },
  leftMenu: {
    width: '280px',
  },
  sideBar: {
    maxWidth: '140px',
  },
  icon: {
    tiny: '14px',
    small: '18px',
    medium: '24px',
    large: '32px',
    big: '48px',
    huge: '64px',
  },
  picker: {
    width: '220px',
    heightBox: '450px',
  },
};

export const calc = ({ min, max }: IMinMax) =>
  `calc(${min}px + (${max} - ${min}) * ((100vw - ${dims.viewport.min}px) / (${dims.viewport.max} - ${dims.viewport.min})))`;

export const toolbar = {
  hgapSmall: calc({ min: 8, max: 20 }),
  hgap: calc({ min: 10, max: 48 }),
  vgap: calc({
    min: 10 / dims.viewport.aspectRatio,
    max: 48 / dims.viewport.aspectRatio,
  }),
  icon: calc({ min: 10, max: 64 }),
  navIcon: calc({ min: 12, max: 80 }),
};

export const laserPointer = {
  icon: calc({ min: 20, max: 50 }),
};

// References:
//   https://chenhuijing.com/blog/math-and-front-end/#%F0%9F%8E%B9
//   https://css-tricks.com/fitting-text-to-a-container/
