import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import Location from './Location';
import Card from './Card';
import * as actions from '../actions';

export class App extends Component {
  componentDidMount() {
    this.props.fetchWeather({ lat: 12.9715987, lng: 77.59456269999998 });
  }

  render() {
    return (
      <div className="container">
        <Nav />
        <Location />
        <h2 className="center grey-text text-darken-2">{this.props.weather && this.props.weather.city ? this.props.weather.city.name : ""}</h2>
        { this.props.weather && this.props.weather.list &&
          <div className="row">
            <Card list={this.props.weather.list} />
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps, actions)(App);
