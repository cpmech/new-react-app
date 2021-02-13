import { useStoreObserver } from '../service';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { NotFoundPage } from './NotFoundPage';
import { TopicsPage } from './TopicsPage';

export const Router: React.FC = () => {
  const { route } = useStoreObserver('Router');

  const [hash, first, second] = route.split('-');

  if (hash === '#topics' && first && second) {
    return <TopicsPage topicId={first} sectionId={second} />;
  }

  if (hash === '#about') {
    return <AboutPage category="me" />;
  }

  if (route.length > 0) {
    return <NotFoundPage />;
  }

  return <HomePage />;
};
