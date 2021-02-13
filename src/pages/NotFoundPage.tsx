/** @jsxImportSource @emotion/react */
import { RcCenterPage } from '../rcomps';
import { styles } from '../styles';

export interface NotFoundPageProps {
  // TODO
}

export const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <RcCenterPage
      message="Sorry, cannot find what you were looking for."
      heightMenu={`calc(${styles.dims.header.height} + ${styles.dims.footer.height})`}
    />
  );
};
