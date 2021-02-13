/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useMediaQuery } from 'react-responsive';
import { IconBars } from '@cpmech/react-icons';
import { RcLinkOrDiv, RcMenuEntry, RcMenuHoriz } from '../rcomps';
import { styles } from '../styles';
import { store } from '../service';

export interface HeaderProps {
  withMenuButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ withMenuButton = true }) => {
  const isTiny = useMediaQuery({ maxWidth: 480 });

  const menuEntries: RcMenuEntry[] = [];

  if (withMenuButton) {
    menuEntries.push({
      comp: (
        <RcLinkOrDiv onClick={() => store.setShowLeftMenu(true)} color={styles.colors.white()}>
          <IconBars size={styles.dims.icon.large} />
        </RcLinkOrDiv>
      ),
    });
  }

  if (!isTiny) {
    menuEntries.push({
      comp: (
        <RcLinkOrDiv onClick={() => console.log("navigate('/')")}>
          <h2
            css={css`
              color: ${styles.colors.white()};
            `}
          >
            Dorival Pedroso
          </h2>
        </RcLinkOrDiv>
      ),
    });
  }

  menuEntries.push({
    comp: <div>Welcome</div>,
  });

  return (
    <div
      css={css`
        background-color: ${styles.colors.blue()};
      `}
    >
      <RcMenuHoriz
        entries={menuEntries}
        height={styles.dims.header.height}
        color={styles.colors.white()}
        bgColor={styles.colors.blue()}
        marginTop="0px"
        paddingVert="0px"
        paddingHoriz="20px"
        maxWidth={`${styles.dims.maxPageWidth}px`}
      />
    </div>
  );
};