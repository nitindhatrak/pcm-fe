
var serverURL = "https://pcm-api-8o973.ondigitalocean.app/"
var localURL = "https://pcm-api-8o973.ondigitalocean.app/"

const getAPIURL = function(service) {

    const location = window.location.host;
    if(location.indexOf('localhost') > -1) {
        return localURL + service;
    }
    return serverURL + service;
}

export { getAPIURL }