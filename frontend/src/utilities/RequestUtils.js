export function sendRequest(url, options, callback) {
    if (url) {
        fetch(url, options)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(json => {
                if (json) {
                    if (callback) {
                        callback(json);
                    }
                }
            });
    }
}
