import getItem from './getModuleData';

const getItemsData = (item, props) => {
  const { floor_title, data_id } = item;
  const { pageInfo, Module, modMap } = props;
  const nativePropsArr = [];
  const floorTitleSurfix = '-floorTitle';
  const itemConfig = {
    ...item,
    Module,
    modMap,
    pageInfo,
  }
  let modData = item.data;

  if (typeof Module.getModuleRows == 'function') {
    modData = Module.getModuleRows(modData);
  }

  // add floor title
  if (floor_title) {
    const elevatorId = `${data_id}${floorTitleSurfix}`;
    nativePropsArr.push({
      ...itemConfig,
      module_name: 'floor-title',
      data: {
        floorTitle: floor_title,
        theme: pageInfo.theme,
        elevatorId,
        isPlatformBuildIn: true,
      },
      moduleId: elevatorId,
      key: elevatorId,
      id: elevatorId,
    });
  }
  
  // render module list
  if (modData.length) {
    modData.map((itemDate, index) => {
      let nativeProps = getItem({
        ...itemConfig,
        childIndex: index,
        data: itemDate,
      });
      nativePropsArr.push(nativeProps);
    });
  } else if(modData) {
    if (modData.length !== 0) {
      let nativeProps = getItem({
        ...itemConfig,
        childIndex: 0,
        data: modData,
      });
      nativePropsArr.push(nativeProps);
    }
  }
  
  return nativePropsArr;
};

export default getItemsData;