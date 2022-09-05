import React, { useState, useEffect, useCallback } from 'react';
import './style.css';

export default function App() {
  const [sec, setSec] = useState(0);
  const [mins, setMins] = useState(0);
  const [hours, setHours] = useState(0);
  const [time, setTime] = useState(null); // why we need total time

  let [form, setForm] = useState(false);
  // const startTimer = (e) => {};

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (time >= 1) setTime(time - 1);
      console.log(time);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [form, time]);

  // useEffect(() => {
  //   console.log('sec2');
  //   setSec2(sec);
  //   console.log(`sec2: ${sec2}`);
  // }, [form]);

  const calculateTotalTime = (s, m, h) => {
    const total = s + m * 60 + h * 3600;
    setTime(total);
    console.log(`time:${total}`);
  };

  return (
    <div>
      <h1>Timer</h1>
      {form ? (
        <div className="set-timer">
          <input
            type="text"
            placeholder="hrs"
            onChange={(e) => setHours(e.target.value)}
          />
          <input placeholder="min" onChange={(e) => setMins(e.target.value)} />
          <input placeholder="sec" onChange={(e) => setSec(e.target.value)} />
          <button
            onClick={() => {
              calculateTotalTime(sec, mins, hours);
              setForm(!form);
            }}
          >
            Start
          </button>
        </div>
      ) : (
        <>
          <div className="timer">
            {/* <p>{hours}</p>
            <p>{mins}</p> */}
            <p>{time}</p>
            {/* <button>Pause</button> */}
            <button
              onClick={() => {
                setForm(!form);
                setMins(0);
                setHours(0);
                setSec(0);
                setTime(0);
              }}
              // we need to make time 0
            >
              Reset
            </button>
          </div>
        </>
      )}

      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
