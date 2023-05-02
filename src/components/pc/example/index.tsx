import { FC, memo } from 'react';
import './index.less';

interface ExampleProps {
  text: string;
}
const Example: FC<ExampleProps> = memo((props) => {
  const { text } = props;
  return <div>{text}</div>;
});
Example.defaultProps = {};
export default Example;
