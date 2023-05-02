import { FC, memo } from 'react';
import './index.less';

interface MobileExampleProps {
  text: string;
}
const MobileExample: FC<MobileExampleProps> = memo((props) => {
  const { text } = props;
  return <div>{text}</div>;
});
MobileExample.defaultProps = {};
export default MobileExample;
