import { memo } from 'react';
import './index.less';
import { MobileExample } from '@/components';

const MobileHome = memo(() => {
  return (
    <div className="mobile-home">
      mobile home
      <MobileExample text="mobile home" />
    </div>
  );
});
export default MobileHome;
