/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface HeaderProps {
  setShowLeftMenu: (show: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ setShowLeftMenu }) => (
  <div
    css={css`
      background-color: #4a76ff;
      height: 100px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  >
    <button onClick={() => setShowLeftMenu(true)}>SHOW LEFT MENU</button>
    <p>HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER HEADER</p>
  </div>
);
