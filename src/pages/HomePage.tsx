/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { LoremIpsum } from '../rcomps';

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => (
  <div
    css={css`
      background-color: #bbd0ff;
    `}
  >
    {LoremIpsum}
  </div>
);
