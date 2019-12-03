import { createElement, render } from 'rax';
import stateManager, { createReducer } from './mods/stateManager';
import reducers from './pages/index/mods/reducers';
import { Home } from './pages/index/components';

const initData = {
  listData: [],
  headlines: {},
  offerList: [],
  banner: [],
  quickEntry: [],
  cheap: [],
  promotion: {},
  cashierCounter: {},
  shelf: [],
  hasMoreOffer: true
};

const App = stateManager(
  createReducer(reducers),
  initData
)(Home);

render(<App />);
