import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
const WeatherExtraInfo = ({humidity, wind}) =>(
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity} % -`}</span>
        <span className="extraInfoText">{`Vientos: ${wind}`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.string.isRequired
}
export default WeatherExtraInfo;