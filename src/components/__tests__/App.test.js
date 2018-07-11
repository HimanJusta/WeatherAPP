import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';
import Nav from '../Nav';
import Card from '../Card';
import Location from '../Location';

describe('App', () => {
  const props = {
    fetchWeather: jest.fn(),
    weather: {}
  };
  const app = shallow(<App {...props} />);

  it ('renders without crashing', () => {
    expect(app).toMatchSnapshot();
  });

  it('Shows a Nav', () => {
    expect(app.find(Nav).length).toEqual(1);
  });

  it('Shows a Location', () => {
    expect(app.find(Location).length).toEqual(1);
  });

  it('Does not show a Card', () => {
    expect(app.find(Card).length).toEqual(0);
  });

  it('Shows 1 Cards', () => {
    const propsWithWeather = {
      fetchWeather: jest.fn(),
      weather: {
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
    };
    const appWithCard = shallow(
      <App
        {...propsWithWeather}
      />
    );
    expect(appWithCard.find(Card).length).toEqual(1);
  });
});
