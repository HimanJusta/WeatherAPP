import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { fetchWeather } from '../../actions';
import { FETCH_WEATHER } from '../../types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockWeatherResponse = {
  city: {id: 1277333, name: "Bangalore", coord: {lat: 12.9762, lon: 77.6033}, country: "IN"},
  list: [
    {
      main: {
        temp:25.02,
        temp_max:25.02,
        temp_min:23.32,
      },
      weather: [{id: 500, main: "Rain", description: "light rain", icon: "10d"}],
      dt_txt:"2018-07-11 09:00:00"
    }
  ]
};

describe('fetchWeather', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates FETCH_WEATHER after successfuly fetching weather', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockWeatherResponse
      });
    });

    const expectedActions = [
      { type: FETCH_WEATHER, payload: mockWeatherResponse }
    ];

    const store = mockStore({ weather: {} })

    return store.dispatch(fetchWeather({ lat: 12.9715987, lng: 77.59456269999998 })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
