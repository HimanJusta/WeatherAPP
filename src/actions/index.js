import axios from 'axios';
import { FETCH_WEATHER } from '../types';

export const fetchWeather = ({ lat, lng }) => async dispatch => {
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&APPID=151c90f9f6ac5276f54c2445e063922e`);
  dispatch({ type: FETCH_WEATHER, payload: res.data });
};
