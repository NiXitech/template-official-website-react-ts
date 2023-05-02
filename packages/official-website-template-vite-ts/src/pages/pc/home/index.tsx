import { memo } from 'react';
import './index.less';
import { Example } from '@/components';

const Home = memo(() => {
  return (
    <div className="home">
      home
      <Example text="home" />
    </div>
  );
});
export default Home;
