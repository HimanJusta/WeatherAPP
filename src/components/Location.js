import React, { Component } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = {
  dropDownStyleActive: {
    backgroundColor: '#e6e6e6',
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)', padding: '10px 0 10px 10px'
  },
  dropDownStyleInActive: {
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)', padding: '10px 0 10px 10px'
  }
};

export class Location extends Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = address => {
    console.log(address);
    this.setState({ address });
  };

  handleSelect = address => {
    console.log('address', address);
    this.setState({ address }, () => {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {this.props.fetchWeather(latLng)})
        .catch(error => console.error('Error', error));
    });
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Choose Location ...',
                className: 'location-search-input',
                autoFocus: true
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? styles.dropDownStyleActive
                  : styles.dropDownStyleInActive;
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default connect(null, actions)(Location);
