# Weather App
This app gets weather forecast information for any location for the next five days at a 3 hour interval.

This app has been developed using :

* create-react-app starter kit
* Axios to make aysncronous network calls.
* used [redux-thunk](https://github.com/reduxjs/redux-thunk) middleware for handling promises.
* [OpenWeatherMap](http://openweathermap.org) API to get weather forecast for 5 days.
* [React Places autocomplete](https://github.com/hibiken/react-places-autocomplete) to get the location data such as lat and longitude.
* JEST and Enzyme for snapshot and unit test cases

###Getting Started###

Checkout this repo, install dependencies, then start webpack server with the following:

```
	> git clone https://github.com/HimanJusta/WeatherAPP.git
	> cd WeatherAPP
	> npm install
	> npm start
	> App should open in the default browser or go to browser and add following address localhost:3000
```

###Running test cases###

Checkout this repo, install dependencies, then start webpack server with the following:

```
	> npm test
```

###Generating coverage report###

Checkout this repo, install dependencies, then start webpack server with the following:

```
	> npm test -- --coverage
```

###TODO

1. Improve UI to show a Map overlay as an option
2. Can include charts using D3 to show the trend in the weather for the coming 5 days.
