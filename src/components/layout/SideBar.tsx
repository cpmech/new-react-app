/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface SideBarProps {
  color?: string;
  bgColor?: string;
  hoverColor?: string;
  colorOnMenu?: string;
  bgColorOnMenu?: string;
  hoverColorOnMenu?: string;
  onMenu?: boolean;
}

export const SideBar: React.FC<SideBarProps> = ({
  color = '#255fdf',
  bgColor = '#ffffff',
  hoverColor = '#a2b7e6',
  colorOnMenu = '#ffffff',
  bgColorOnMenu = 'rgba(0,0,0,0.8)',
  hoverColorOnMenu = '#6e6e6e',
  onMenu = false,
}) => {
  const fg = onMenu ? colorOnMenu : color;
  const bg = onMenu ? bgColorOnMenu : bgColor;
  const hc = onMenu ? hoverColorOnMenu : hoverColor;

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: ${fg};
        background-color: ${bg};
        padding: 40px 20px;
      `}
    >
      TODO: {hc}
    </div>
  );
};
