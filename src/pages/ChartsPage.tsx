/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RouteComponentProps } from '@reach/router';
import { LoremIpsum } from '../rcomps';

export interface ChartsPageProps extends RouteComponentProps {}

export const ChartsPage: React.FC<ChartsPageProps> = () => (
  <div
    css={css`
      background-color: #ffbbee;
    `}
  >
    {LoremIpsum}
  </div>
);
