const ActivityAPIpath = '/testdata/activity_list.json';
// const getObjectFromJson = response => response.json();

const throwIfNotOk = response => {
  console.log(response);
  if (!response.ok) {
    console.log("erroring");
    throw Error(response.statusText);
  }
  return response;
};

// const sleep = (msecs) => (
//   results => new Promise(resolve => setTimeout(() => resolve(results), msecs))
// );



const getActivityList = (query) => {
//  const encodedQuery = encodeURIComponent(query);
//  const url = `${randomGiphyApiPath}?api_key=dc6zaTOxFJmzC&tag=${encodedQuery}`;
  const url = `${ActivityAPIpath}`;
  console.log('getting:', url);

  return fetch(url, {
        method: 'GET',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        }
    })
    .then(throwIfNotOk)
    .then(response => { return response.json();})
    .then(response => {console.log(response); return response;})
    //.then(data => {this.setState({"data" : data});})

    .catch(err => {
        console.log("fetch error" + err);
    });

};

export default getActivityList;
