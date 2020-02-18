import fetch from './fetch';

class dataLoader {
  constructor(config) {
    this.isFirstScreen = true;
    this.hasMoreModules = true;
    this.firstScreenConfig = config.firstScreenConfig;
    this.fellowScreenConfig = config.fellowScreenConfig;
  }
  request(config) {
    return new Promise((resolve, reject) => {
      fetch(config).then((res) => {
        resolve(res);
      }).catch((e) => {
        reject(e)
      });
    });
  }
  getFirstScreenData(config) {
    return new Promise((resolve, reject) => {
      config = {
        ...this.firstScreenConfig,
        ...config,
        url: config.url || '',
      };
      this.request(config).then((res) => {
        if (res && res.data && res.data.resultValue) {
          this.hasMoreModules = res.data.resultValue.hasMoreModules;
        }
        this.isFirstScreen = false;
        resolve(res);
      }).catch((e) => {
        reject(e)
      });
    });
  }
  getFellowScreenData(config) {
    if (this.hasMoreModules) {
      return new Promise((resolve, reject) => {
        config = {
          ...this.fellowScreenConfig,
          ...config,
          url: config.url || '',
        };
        this.request(config).then((res) => {
          if (res && res.data && res.data.resultValue) {
            this.hasMoreModules = res.data.resultValue.hasMoreModules;
          }
          resolve(res);
        }).catch((e) => {
          reject(e)
        });
      });
    }
  }
}

export default dataLoader;