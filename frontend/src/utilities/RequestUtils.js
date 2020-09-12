export function sendRequest(url, options, callback) {
    if(url) {
        fetch(url, options)
        .then(res => {
            if(callback) {
                callback(res);
            }
        })
    }
}
