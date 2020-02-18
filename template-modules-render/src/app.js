import dataLoader from '../packages/universal-data-loader/src/index';
import moduleLoader from '../packages/universal-module-loader/src/index';
import listRender from '../packages/rax-recyclerview-render/src/index';
import dataProcessor from '../packages/universal-data-processor/src/index';

// mock data
import mockFirstScreenData from './mockData/firstScreenData';
import mockFellowScreenData from './mockData/fellowScreenData';
import mockModules from './mockData/modules';

class List extends listRender {
  constructor(config) {
    super(config);
  }
  beforeCreate() {
    console.log('before list create');
    super.beforeCreate();
  }
  updateData(data) {
    console.log('update data', data);
    super.updateData(data);
  }
}

(new List({
  dataLoader: new dataLoader({
    localPageInfo: {
    },
    firstScreenConfig: {
      mockData: mockFirstScreenData,
    },
    fellowScreenConfig: {
      mockData: mockFellowScreenData
    },
  }),
  moduleLoader: new moduleLoader({
    modules: mockModules,
  }),
  dataProcessor: new dataProcessor(),
})).init();