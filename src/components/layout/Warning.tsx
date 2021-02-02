/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const Warning: React.FC = () => (
  <div
    css={css`
      background-color: #c01626;
      min-height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  >
    WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
  </div>
);
