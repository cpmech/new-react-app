/** @jsxImportSource @emotion/react */
import { RcMenuEntry, RcMenuVert } from '../rcomps';
import { store } from '../service';
import { styles } from '../styles';

const topics = ['CIVL7215', 'Projects'];

const nav = (route: string, onMenu: boolean) => {
  if (onMenu) {
    store.setShowLeftMenu(false);
  }
  store.setRoute(route);
};

export const getEntries = (onMenu: boolean): RcMenuEntry[] => [
  {
    icon: <div>ICON</div>,
    label: 'About',
    onClick: () => nav('#about', onMenu),
  },
  {
    icon: <div>ICON</div>,
    label: 'Topics',
    onClick: () => nav('', onMenu),
    entries: topics.map((topic) => ({
      icon: <div>ICON</div>,
      label: topic,
      onClick: () => {
        nav(`#topics-${topic}-1`, onMenu);
      },
    })),
  },
];

export interface SideBarProps {
  onMenu?: boolean;
}

export const SideBar: React.FC<SideBarProps> = ({ onMenu = false }) => {
  const fg = onMenu ? styles.colors.white() : styles.colors.blue();
  const hc = onMenu ? styles.colors.grey(50) : styles.colors.blue(50);
  const bg = styles.colors.transparent();

  return (
    <RcMenuVert
      entries={getEntries(onMenu)}
      color={fg}
      bgColor={bg}
      colorHover={hc}
      minWidth={styles.dims.sideBar.maxWidth}
      maxWidth={styles.dims.sideBar.maxWidth}
    />
  );
};
