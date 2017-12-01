
export const fetchAccountList = (url, filter) => {
    debugger;
    return fetch(url)
    .then(response => {
        debugger;
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }).then(json => {
        debugger;
        let filteredObject = null;
        Object.keys(json).forEach(function(k){
            if(k===filter) {
                filteredObject = json[k];
            }
        });
        return filteredObject;
    }).catch(function(error) {
        debugger;
        console.log('There has been a problem with your fetch operation: ' + error.message);
    });
};

