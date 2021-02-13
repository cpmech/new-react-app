/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { styles } from '../styles';

export const Footer: React.FC = () => (
  <div
    css={css`
      background-color: ${styles.colors.grey()};
      height: ${styles.dims.footer.height};
      color: ${styles.colors.white()};
      display: flex;
      justify-content: center;
      align-items: center;
      font-style: italic;
    `}
  >
    Copyright (2021) Dorival Pedroso
  </div>
);
