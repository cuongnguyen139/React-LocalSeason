import './SeasonDisplay.css';
import React from 'react';

let text='';

const getSeason = (lat, month) => {
  if (lat > 0) {
    if (month >= 3 && month <= 5 ) {
      text = "You live in Northern Hemisphere and it's spring time!";
    }
    else if (month >= 6 && month <= 8 ) {
      text = "You live in Northern Hemisphere and it's summer time!";
    }
    else if (month >= 9 && month <= 11 ) {
      text = "You live in Northern Hemisphere and it's autumn time!";
    }
    else {
      text = "You live in Northern Hemisphere and it's winter time!";
    }
  } 
  else {
    if (month >= 3 && month <= 5 ) {
      text = "You live in Southern Hemisphere and it's autumn time!";
    }
    else if (month >= 6 && month <= 8 ) {
      text = "You live in Southern Hemisphere and it's winter time!";
    }
    else if (month >= 9 && month <= 11 ) {
      text = "You live in Southern Hemisphere and it's spring time!";
    }
    else {
      text = "You live in Southern Hemisphere and it's summer time!";
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