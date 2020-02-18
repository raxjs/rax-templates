import { createElement, render, createRef } from 'rax';
import List from './List';
import { setupAppear } from 'rax-appear';
import * as DriverDOM from 'driver-dom';
 
class App {
  constructor(cfg) {
    const {
      dataProcessor,
      moduleLoader,
      dataLoader,
    } = cfg;
    this.dataProcessor = dataProcessor;
    this.moduleLoader = moduleLoader;
    this.dataLoader = dataLoader;
    this.appRef = createRef('app');
    setupAppear();
  }

  updateData(resultValue) {
    return new Promise((resolve, reject) => {
      this.moduleLoader.getModules(resultValue.data).then((modMap) => {
        this.appRef.current.updateData({...resultValue, modMap:modMap});
        resolve();
      });
    });
  }

  loadFellowScreenData(resultValue) {
    let { hasMoreModules } = resultValue;
    if (hasMoreModules === true) {
      setTimeout(() => {
        let fellowScreenData = this.dataLoader.getFellowScreenData({
          // your fellow screen config
        });
        fellowScreenData && fellowScreenData.then((res) => {
          let resData = res.data.resultValue || res;
          console.log('loadFellowScreenData', res);
          this.updateData({
            ...resData,
          });
          this.loadFellowScreenData(resData);
        });
      }, 500);
    }
  }

  beforeCreate() {
    // first screen data
    this.dataLoader.getFirstScreenData({device: this.device}).then((res) => {
        this.updateData({
          ...res.data.resultValue,
        });
        // fellow screen data
        this.loadFellowScreenData(res.data.resultValue);
    });
  }

  init() {
    let lifecycle = {
      beforeUpdate: this.beforeUpdate,
      mounted: this.mounted,
      destroyed: this.destroyed,
    };
    this.beforeCreate();
    render(<List ref={this.appRef} device={this.device} dataProcessor={this.dataProcessor} {...lifecycle} />, null, {driver: DriverDOM});
  }
}

export default App;