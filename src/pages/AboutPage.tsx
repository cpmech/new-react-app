/** @jsxImportSource @emotion/react */
import { RcCenterPage } from '../rcomps';
import { styles } from '../styles';

export interface AboutPageProps {
  category: string;
}

export const AboutPage: React.FC<AboutPageProps> = ({ category }) => {
  return (
    <RcCenterPage
      message={`About Page. Category = ${category}`}
      heightMenu={`calc(${styles.dims.header.height} + ${styles.dims.footer.height})`}
      colorMessage={styles.colors.orange()}
    />
  );
};
