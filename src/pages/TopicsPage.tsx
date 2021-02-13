/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { isValidPositiveNumber } from '@cpmech/util';
import { RcCenterPage, RcReadyOrErrorPopup } from '../rcomps';
import { store, useStoreObserver } from '../service';
import { styles } from '../styles';

export interface TopicsPageProps {
  topicId: string;
  sectionId: string;
}

export const TopicsPage: React.FC<TopicsPageProps> = ({ topicId, sectionId }) => {
  const { ready, error } = useStoreObserver('TopicsPage');

  useEffect(() => {
    if (topicId) {
      store.loadTopic(topicId);
    }
  }, [topicId]);

  if (!ready) {
    return (
      <RcReadyOrErrorPopup
        ready={ready}
        error={error}
        onClose={() => console.log("navigate('/')")}
      />
    );
  }

  if (!isValidPositiveNumber(sectionId || '')) {
    return (
      <RcReadyOrErrorPopup
        ready={false}
        error="SectionId number is invalid"
        onClose={() => console.log("navigate('/')")}
      />
    );
  }

  return (
    <RcCenterPage
      heightMenu={`calc(${styles.dims.warning.height} + ${styles.dims.header.height})`}
      colorMessage={styles.colors.green()}
    >
      <div
        css={css`
          text-decoration: underline;
        `}
      >
        <div>{`topicId = "${topicId}"`}</div>
        <div>{`sectionId = "${sectionId}"`}</div>
      </div>
    </RcCenterPage>
  );
};
