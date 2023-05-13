import { memo } from 'react';
import './index.less';
import { Example } from '@/components';
import { useTranslation } from 'react-i18next';
import { getExample } from '@/services';

const Home = memo(() => {
  const { t } = useTranslation();
  getExample({});
  return (
    <div className="home">
      {t('welcome')}
      <Example text="home" />
    </div>
  );
});
export default Home;
