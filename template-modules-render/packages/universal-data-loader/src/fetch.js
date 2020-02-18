import jsonp from 'universal-jsonp';

export default function FetchReq(params) {
  return new Promise((resolve, reject) => {
    const { mockData, url } = params;
    if (mockData) {
      if (mockData.data) {
        resolve(mockData);
      } else {
        reject({})
      }
    } else {
      jsonp(url, params).then(function(response) {
        return response.json();
      }).then(function(json) {
        resolve(json);
      }).catch(function(err) {
        reject(err);
      });
    }
  });
}
