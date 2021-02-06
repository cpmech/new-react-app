/** @jsxImportSource @emotion/react */
import { IconChartBar, IconHome } from '@cpmech/react-icons';
import { css } from '@emotion/react';
import { navigate } from '@reach/router';
import { RcLinkOrDiv, RcPair } from '../../rcomps';

const sizeIcon = 32;

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
      <RcLinkOrDiv onClick={() => navigate('/')} color={fg} hoverColor={hc}>
        <RcPair left={<IconHome size={sizeIcon} />} right={<span>HOME</span>} spaceBetween={true} />
      </RcLinkOrDiv>

      <RcLinkOrDiv onClick={() => navigate('/charts')} color={fg} hoverColor={hc}>
        <RcPair
          left={<IconChartBar size={sizeIcon} />}
          right={<span>CHARTS</span>}
          spaceBetween={true}
        />
      </RcLinkOrDiv>
    </div>
  );
};
