/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { RcCenterPage } from '../rcomps';
import { styles } from '../styles';

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => (
  <div
    css={css`
      background-color: #bbd0ff;
    `}
  >
    <RcCenterPage
      message="WORK IN PROGRESS..."
      subMessage="Thanks for passing by"
      heightMenu={`calc(${styles.dims.header.height} + ${styles.dims.footer.height})`}
      colorMessage={styles.colors.blue()}
    />
  </div>
);
