import React from 'react';
import PropTypes from 'prop-types';

function InteractiveButtons(props) {
  let sleepButtonText = null;
  if(props.tamagotchi.sleeping) {
    sleepButtonText = 'Wake Up';
  } else {
    sleepButtonText = 'Take A Nap';
  }
  return(
    <div>
      <button onClick={props.onFeed}>Feed</button>
      <button onClick={props.onPlay}>Play</button>
      <button onClick={props.onSleep}>{sleepButtonText}</button>
    </div>
  );
}

InteractiveButtons.propTypes = {
  onUpdateStats: PropTypes.func,
  onFeed: PropTypes.func,
  onPlay: PropTypes.func,
  onSleep: PropTypes.func,
  tamagotchi: PropTypes.object
};

export default InteractiveButtons;
