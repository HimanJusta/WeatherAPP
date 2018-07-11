import React from 'react';
import moment from 'moment';

const Card = ({ list }) => {
  return (
    <div>
      {list.map(({ weather, dt_txt, main }) => {
        return (
          <div className="col s12 m4" key={dt_txt}>
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title left">{moment(dt_txt).format('ddd, Do MMM YYYY, hh:mm A')}</span>
                <p className="right" style={{ fontSize: '2.2rem', color: '#ffab40' }}>{`${main.temp}`} &#8451;</p>
                <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt={weather[0].description}/>
                <p>{weather[0].description.toUpperCase()}</p>
              </div>
              <div className="card-action">
                <a>Max: {main.temp_max} &#8451;</a>
                <a>Min: {main.temp_min} &#8451;</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
