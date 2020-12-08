import React from 'react';
import ReactTimerStopwatch from 'react-stopwatch-timer';
 
const fromTime = new Date(0, 0, 0, 0, 10, 0, 0);
 
const App = () => {
    return (
        <ReactTimerStopwatch isOn={true} className="react-stopwatch-timer__table" watchType="timer"
                             displayCricle={true} color="gray" hintColor="red" fromTime={fromTime}/>
    );
};
 
export default App;