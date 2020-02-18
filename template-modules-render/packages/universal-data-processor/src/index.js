import dataSplitting from './dataSplitting';

class dataProcessor {
  constructor(config) {
    this.modulesInfo = {};
    this.pageInfo = {};
    this.pageData = [];
    this.moduleIdList;
    this.modList = {
      background: [],
      top: [],
      default: [],
      bottom: [],
    }
  }

  getModulesData(resultValue) {
    let {
      data,
      pageInfo,
      modMap,
    } = resultValue;
    this.pageInfo = pageInfo;
  
    data.map((item) => {
      let moduleName = item['module_name'];
      if (modMap[moduleName] && modMap[moduleName].moduleClass) {
        let Mod = modMap[moduleName].moduleClass;
        const modulePosition = Mod.modulePosition || 'default';
        let data = dataSplitting(item, {
          moduleName,
          Module: modMap[moduleName].moduleClass,
          data,
          pageInfo,
          modMap,
        });
        data.map((nativeProps) => {
          this.modList[modulePosition].push(nativeProps);
        });
      }
    });
  
    return {
      backgroundModList: this.modList.background,
      headerModList: this.modList.top,
      bodyModList: this.modList.default,
      footerModList: this.modList.bottom,
    };
  }
}

export default dataProcessor;