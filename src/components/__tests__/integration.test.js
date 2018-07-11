import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../../Root';
import App from '../App';
import Card from '../Card';

describe('Intergation', () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://api.openweathermap.org/data/2.5/forecast?lat=12.9715987&lon=77.59456269999998&units=metric&APPID=151c90f9f6ac5276f54c2445e063922e', {
      status: 200,
      response: {
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
      }
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('can fetch a list of weather and display them', (done) => {
    const wrapped = mount(
      <Root>
        <App />
      </Root>
    );

    wrapped.find('PlacesAutocomplete').simulate('select', 'Bangalore');
    moxios.wait(() => {
      wrapped.update();
      expect(wrapped.find(Card).length).toEqual(1);
      done();
      wrapped.unmount();
    });
  });
});
