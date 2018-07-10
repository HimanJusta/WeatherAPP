import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import Location from './Location';
import * as actions from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchWeather({ lat: 12.9715987, lng: 77.59456269999998 });
  }

  renderList() {
    return (
      this.props.weather.list && this.props.weather.list.map(({ weather, dt_txt, main }) => {
        return (
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{new Date(dt_txt).toLocaleDateString()}</span>
                <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} />
                <p><span>{weather[0].description.toUpperCase()}</span></p>s
              </div>
              <div className="card-action">
                <a>Temp: {main.temp}</a>
                <a>Max Temp: {main.temp_max}</a>
                <a>Min Temp: {main.temp_min}</a>
              </div>
            </div>
          </div>
        );
      })
    );
  }
  render() {
    console.log(this.props.weather);
    return (
      <div className="container">
        <Nav />
        <Location />
        <div className="row">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps, actions)(App);
