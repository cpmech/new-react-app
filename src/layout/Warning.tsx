/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { IconClose } from '@cpmech/react-icons';
import { RcLinkOrDiv, RcMenuEntry, RcMenuHoriz } from '../rcomps';
import { styles } from '../styles';
import { store } from '../service';

export interface WarningProps {}

export const Warning: React.FC<WarningProps> = () => {
  const menuEntries: RcMenuEntry[] = [
    {
      comp: (
        <div
          css={css`
            color: ${styles.colors.white()};
          `}
        >
          TODO
        </div>
      ),
    },
    {
      comp: (
        <RcLinkOrDiv onClick={() => store.setShowWarning(false)} color={styles.colors.white()}>
          <IconClose size={styles.dims.icon.medium} />
        </RcLinkOrDiv>
      ),
    },
  ];

  return (
    <div
      css={css`
        background-color: ${styles.colors.red(0)};
        height: ${styles.dims.warning.height};
      `}
    >
      <RcMenuHoriz
        entries={menuEntries}
        height={styles.dims.warning.height}
        color={styles.colors.white()}
        bgColor={styles.colors.red(0)}
        marginTop="0px"
        paddingVert="0px"
        paddingHoriz="20px"
        maxWidth={`${styles.dims.maxPageWidth}px`}
      />
    </div>
  );
};
