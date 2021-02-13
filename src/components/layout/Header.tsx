/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IconBars } from '@cpmech/react-icons';
import { RcLinkOrDiv } from '../../rcomps';

export interface HeaderProps {
  show: () => void;
  height?: string;
  sizeIcon?: string;
  withMenuButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  show,
  height = '100px',
  sizeIcon = '32px',
  withMenuButton = true,
}) => (
  <div
    css={css`
      background-color: #4a76ff;
      height: ${height};
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
          top: calc((${height} - ${sizeIcon}) / 2);
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
