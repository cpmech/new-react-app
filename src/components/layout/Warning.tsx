/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IconClose } from '@cpmech/react-icons';
import { RcLinkOrDiv } from '../../rcomps';

export interface WarningProps {
  hide: () => void;
  height?: string;
  sizeIcon?: string;
}

export const Warning: React.FC<WarningProps> = ({ hide, height = '50px', sizeIcon = '24px' }) => (
  <div
    css={css`
      background-color: #c01626;
      height: ${height}px;
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
      WARNING WARNING WARNING
    </p>
    <div
      css={css`
        position: absolute;
        top: calc((${height} - ${sizeIcon}) / 2);
        right: 20px;
      `}
    >
      <RcLinkOrDiv onClick={() => hide()} color="#fff">
        <IconClose size={sizeIcon} />
      </RcLinkOrDiv>
    </div>
  </div>
);
