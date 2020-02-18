const data = {
  api: 'mock_data',
  data: {
    resultValue: {
      data: [
        {
          data_id: 'data-10000',
          module_name: 'card_a',
          data: [{
            name: 'this is a list demo'
          }]
        },
        {
          data_id: 'data-10001',
          module_name: 'card_b',
          data: [{
            name: 'copy data by CardB.getModuleRows'
          }],
          floor_title: 'render a title'
        },
        {
          data_id: 'data-10002',
          module_name: 'card_c',
          data: [{
            name: 'this is CardC'
          }]
        }
      ],
      pageInfo: {
        theme: {
          backgroundColor: '#9D0000',
          floorTitleIcon: 'https://img.alicdn.com/tfs/TB1xX9grVT7gK0jSZFpXXaTkpXa-120-48.png',
        },
      },
      device: 'phone',
      isFirstScreen: true,
      hasMoreModules: true,
    },
  },
  ret: ['SUCCESS'],
  v: '1.0'
}

export default data;