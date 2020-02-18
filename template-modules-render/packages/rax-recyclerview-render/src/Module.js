import { createElement } from 'rax';
import View from 'rax-view';
import FloorTitle from './FloorTitle';

let Mod = (props) => {
  let { 
    id,
    module_name,
    Module,
    data,
  } = props;

  try {
    if (module_name == 'floor-title') {
      return (
        <View id={id}>
          <FloorTitle {...props} />
        </View>
      );
    } else if (Module && data) {
      let modProps = {
        id,
      }
      modProps['mod-name'] = module_name;
      return (
        <View {...modProps} >
          <Module {...props} />
        </View>
      );
    } else {
      return null;
    }
  } catch (e) {
    console.error('模块渲染异常', e);
    return null;
  }
};

export default Mod;
