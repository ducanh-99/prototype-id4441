import React from 'react';
import ReactTimerStopwatch from 'react-stopwatch-timer';
import '../Lesson/stopWatch.css'
const fromTime = new Date(0, 0, 0, 0, 0, 0, 0);
 
const StopWatch = () => {
    return (
        <ReactTimerStopwatch isOn={true} className="react-stopwatch-timer__table" watchType="stopwatch"
        displayCircle={true} color="gray" hintColor="red" fromTime={fromTime}/>
    );
};
 
export default StopWatch;