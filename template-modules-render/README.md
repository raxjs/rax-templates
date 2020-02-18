# template-modules-render

This is a data-driven module rendering scheme. Module developers do not care about the assembly of the whole page. The organization of the page depends on the data

## Directory Structure

In real business scenarios, only business modules and data interfaces need to be developed to complete page rendering.

```
├── README.md 
├── build.json
├── package.json
├── packages                    # modules render packages
│   ├── rax-recyclerview-render
│   ├── universal-data-loader
│   ├── universal-data-processor
│   └── universal-module-loader
└── src                         # page exampele
    ├── app.js                  
    ├── app.json                
    ├── document                
    │   └── index.jsx    
    ├── mockData                # mock data
    │   ├── firstScreenData.js
    │   ├── fellowScreenData.js
    │   └── modules.js
    └── modules                 # business modules
        ├── CardA
        ├── CardB
        └── CardC   
```

## Template Screenshot

![](https://gw.alicdn.com/tfs/TB1xq7MvQL0gK0jSZFxXXXWHVXa-652-1146.png)

## Example

```
import dataLoader from 'universal-data-loader';
import moduleLoader from 'universal-module-loader';
import dataProcessor from 'universal-data-processor';
import listRender from 'rax-recyclerview-render';

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
    // config
  }),
  moduleLoader: new moduleLoader({
    // config
  }),
  dataProcessor: new dataProcessor(),
})).init();
```

## Data Loader

Data request method, providing two APIs of first screen and fellow screen

• getFirstScreenData
• getFellowScreenData

```
dataLoader.getFirstScreenData({}).then((res) => {
  // get data
});
```

## Module Loader

Module component and data binding

## Data Processor

Processing of complex business data

## List Render

List rendering scheme. The current example is rendered by recyclerview

## Data Format

Interface specifications help us better organize data

This is a example

```
{
  api: 'mock_data',
  data: {
    resultValue: {
      data: [
        // modules data
      ],
      pageInfo: {
        // page data
      },
      device: 'phone',
      isFirstScreen: true,
      hasMoreModules: true,
    },
  },
  ret: ['SUCCESS'],
}
```

## Module Development Specification

As with component development, the getmodulerows method is extended in the component for data splitting.

Data can be obtained through the data attribute of props

```
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

const Card = (props) => {
  return (
    <View>
      <Text>Card</Text>
      <View>
        <Text>
          {props.data.name}
        </Text>
      </View>
    </View>
  );
};

Card.getModuleRows = (modData) => {
  // this is new data
  return [modData[0], modData[0]]
}

export default Card;
```
