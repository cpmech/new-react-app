/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IconBars } from '@cpmech/react-icons';
import { RcLinkOrDiv } from '../../rcomps';

export interface HeaderProps {
  show: () => void;
  height?: number;
  sizeIcon?: number;
  withMenuButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  show,
  height = 100,
  sizeIcon = 32,
  withMenuButton = true,
}) => (
  <div
    css={css`
      background-color: #4a76ff;
      height: ${height}px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    `}
  >
    <p
      css={css`
        color: #eeeeee;
      `}
    >
      HEADER HEADER HEADER
    </p>
    {withMenuButton && (
      <div
        css={css`
          position: absolute;
          top: ${Math.max(0, height - sizeIcon) / 2}px;
          left: 20px;
        `}
      >
        <RcLinkOrDiv onClick={() => show()} color="#fff">
          <IconBars size={sizeIcon} />
        </RcLinkOrDiv>
      </div>
    )}
  </div>
);
