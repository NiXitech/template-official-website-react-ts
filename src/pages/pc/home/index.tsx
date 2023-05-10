import { memo } from 'react';
import './index.less';
import { Example } from '@/components';
import { useTranslation } from 'react-i18next';

const Home = memo(() => {
  const { t } = useTranslation();
  return (
    <div className="home">
      {t('welcome')}
      <Example text="home" />
    </div>
  );
});
export default Home;
