import fetch from 'isomorphic-fetch';
import store from '../index';
import reduxActions from '../constants/reduxActions';

let defaultOptions = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default',
    method: 'GET',
    body: null
};

export default class Api {
    constructor(url, options = {}) {
        this.url = url;
        this.options = Object.assign(defaultOptions, options);

        // add auth headers if they are present
        if (!!localStorage.getItem('X-Auth-Token')) {
            this.options.headers['X-Auth-Token'] = localStorage.getItem('X-Auth-Token');
        }

        this.fetch = fetch;
    }

    callApi() {
        return this.fetch(this.url, this.options)
        .then(function (res) {
            if (res.status >= 200 && res.status < 300) {
                // if we receive an auth token we should add this to the storage
                if (res.headers.has('X-Auth-Token')) {
                    localStorage.setItem('X-Auth-Token', res.headers.get('X-Auth-Token'));
                }
                return res.json()
                .then(function (json) {
                    return {status: res.status, json: json}
                })
                .catch(function (e) {
                    return {status: res.status}; // not really an error. If request wasn't a json request then skip
                });
            } else {
                // try to get error message from json
                return res.json()
                .then(function (json) {
                    return Promise.reject({status: res.status, json: json})
                })
                .catch(function (e) {
                    switch (res.status) {
                        case 401:
                        case 403:
                            store.dispatch({ type: reduxActions.LOGOUT });
                            return Promise.reject(e);
                        default:
                            return Promise.reject(e);
                    }
                });
            }
        })
        .then(
            function (res) { // success
                return {res};
            },
            function (err) { //fail
                return {err}
            }
        );
    }
}


export function Get(url, options = {}) {
    options.method = "GET";
    options.body = undefined;
    return new Api(url, options).callApi();
}

export function Post(url, body, options = {}) {
    options.method = "POST";

    // stringify body if needed
    if (!!body) {
        options.body = JSON.stringify(body);
    }
    return new Api(url, options).callApi();
}

export function Put(url, body, options = {}) {
    options.method = "PUT";

    // stringify body if needed
    if (!!body) {
        options.body = JSON.stringify(body);
    }
    return new Api(url, options).callApi();
}

export function Delete(url, options = {}) {
    options.method = "Delete";
    return new Api(url, options).callApi();
}
