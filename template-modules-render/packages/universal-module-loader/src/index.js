class moduleLoader {
  constructor(config) {
    this.modules = config.modules;
    this.modMap = {};
  }

  getModules(modulesData) {
    return new Promise((resolve, reject) => {
      modulesData.map((moduleInfo, index) => {
        let name = moduleInfo.module_name;
        this.modMap[name] = {
          moduleClass: this.modules[name]
        };
      });
      resolve(this.modMap);
    });
  }
}

export default moduleLoader;