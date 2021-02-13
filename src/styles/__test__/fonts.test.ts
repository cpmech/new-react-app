import { dims } from '../dims';
import { fontSizer } from '../fonts';

describe('fontSizer', () => {
  it('should return the CSS calc command', () => {
    dims.viewport.min = 320;
    dims.viewport.max = 1280;
    fontSizer.setSize('h1', { min: 16, max: 22 });
    const res = fontSizer.fszCss('h1');
    expect(res).toBe('font-size: calc(16px + (22 - 16) * ((100vw - 320px) / (1280 - 320)));');
  });
});
