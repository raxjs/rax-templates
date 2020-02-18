import { createElement } from 'rax';
import View from 'rax-view';

const Mod = (props) => {
  const pageStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...props.style,
  }
    
  return (
    <View style={pageStyle} {...props} />
  );
};

export default Mod;
