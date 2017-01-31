import { RECEIVE_URLS } from '../constants/ActionTypes'

const initialState = [

];

export function urls(state = initialState, action) {
    switch(action.type) {
        case RECEIVE_URLS:
          console.log([...action.payload, ...state]);
          return [...action.payload, ...state];
        default:
          return state;
    }
}