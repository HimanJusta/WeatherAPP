import { FETCH_WEATHER } from '../types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload
    default:
      return state;
  }
};
