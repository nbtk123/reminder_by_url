import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

export const requestUrls = () => ({type: types.REQUEST_URLS});
export const receiveUrls = (urls) => ({type: types.RECEIVE_URLS, payload: urls});
export const fetchUrls = () => {
    return (dispatch) => {
        dispatch(requestUrls());
        return fetch("http://localhost:3000/")
          .then(response => [{url: "http://www.facebook.com", messages:["Don't put your blame on me", "Don't put your blame on him"]}])
          .then(urls => dispatch(receiveUrls(urls)));
    }
}