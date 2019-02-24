import './SeasonDisplay.css';
import React from 'react';

let text='';

const getSeason = (lat, month) => {
  if (lat > 0) {
    if (month >= 3 && month <= 5 ) {
      text = "You live in Northern Hemisphere and it's spring time!";
      return "spring";
    }
    else if (month >= 6 && month <= 8 ) {
      text = "You live in Northern Hemisphere and it's summer time!";
      return "summer";
    }
    else if (month >= 9 && month <= 11 ) {
      text = "You live in Northern Hemisphere and it's autumn time!";
      return "autumn";
    }
    else {
      text = "You live in Northern Hemisphere and it's winter time!";
      return "winter";
    }
  } 
  else {
    if (month >= 3 && month <= 5 ) {
      text = "You live in Southern Hemisphere and it's autumn time!";
      return "autumn";
    }
    else if (month >= 6 && month <= 8 ) {
      text = "You live in Southern Hemisphere and it's winter time!";
      return "winter";
    }
    else if (month >= 9 && month <= 11 ) {
      text = "You live in Southern Hemisphere and it's spring time!";
      return "spring";
    }
    else {
      text = "You live in Southern Hemisphere and it's summer time!";
      return "summer";
    }
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());

  return (
    <div className={`season-display ${season}`}>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
