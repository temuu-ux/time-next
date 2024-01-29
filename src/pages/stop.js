import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      timer = setInterval(() => setTime(time + 1), 10);
      console.log(timer, "his");
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const milliseconds = time % 100;

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(0);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="flex gap-3 ">
        <button className="stopwatch-button border-2" onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button border-2" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
