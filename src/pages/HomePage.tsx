/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RouteComponentProps } from '@reach/router';
import { LoremIpsum } from '../rcomps';

export interface HomePageProps extends RouteComponentProps {}

export const HomePage: React.FC<HomePageProps> = () => (
  <div
    css={css`
      background-color: #bbd0ff;
    `}
  >
    {LoremIpsum}
  </div>
);
