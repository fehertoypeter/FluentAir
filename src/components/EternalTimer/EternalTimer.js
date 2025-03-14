import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";
import { Icons } from "../../assets/images/icons/icons";
import "./EternalTimer.css";

const EternalTimer = forwardRef(
  (
    {
      eternalInitialTime,
      onTimeUpdate,
      onStop,
      onStart,
      onPause,
      onResume,
      onTimeOut,
    },
    ref
  ) => {
    const [timeRemaining, setTimeRemaining] = useState(eternalInitialTime);
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const intervalIdRef = useRef(null); // Az intervalId tárolására
    const remainingTimeRef = useRef(eternalInitialTime); // Ref a remainingTime tárolására

    useImperativeHandle(ref, () => ({
      startTimer,
      stopTimer,
      pauseTimer,
      resumeTimer,
      resetTimer,
      getRemainingTime: () => remainingTimeRef.current, // Közvetlen hozzáférés a remainingTime-hez
    }));

    const resetTimer = () => {
      setTimeRemaining(eternalInitialTime);
      remainingTimeRef.current = eternalInitialTime; // Ref frissítése
      setIsRunning(false);
      setIsPaused(false);
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };

    useEffect(() => {
      if (isRunning) {
        intervalIdRef.current = setInterval(() => {
          setTimeRemaining((prev) => {
            if (prev > 0) {
              const newTime = prev - 1;
              remainingTimeRef.current = newTime; // Ref frissítése
              return newTime;
            } else {
              clearInterval(intervalIdRef.current);
              setIsRunning(false);
              return 0;
            }
          });
        }, 1000);
      }

      return () => {
        if (intervalIdRef.current) {
          clearInterval(intervalIdRef.current);
          intervalIdRef.current = null;
        }
      };
    }, [isRunning]);

    useEffect(() => {
      if (timeRemaining === 0 && !isRunning) {
        if (onTimeOut) onTimeOut(0);
      }
    }, [timeRemaining, isRunning, onTimeOut]);

    useEffect(() => {
      if (onTimeUpdate) {
        onTimeUpdate(timeRemaining);
      }
    }, [timeRemaining, onTimeUpdate]);

    const startTimer = () => {
      setIsRunning(true);
      setIsPaused(false);
      if (onStart) onStart();
    };

    const pauseTimer = () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
      setIsRunning(false);
      setIsPaused(true);
      if (onPause) onPause();
    };

    const resumeTimer = () => {
      startTimer();
      if (onResume) onResume();
    };

    const stopTimer = () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
      setIsRunning(false);
      setIsPaused(false);

      if (timeRemaining === 0 && onTimeOut) {
        onTimeOut(timeRemaining);
      } else if (onStop) {
        onStop(remainingTimeRef.current); // Ref használata a pontos idő továbbításához
      }
    };

    return (
      <div>
        <div className="eternal-timer-container">
          <Icons.IoHourglassOutline />
          <div className="time-format">
            {Math.floor(timeRemaining / 60)}:
            {(timeRemaining % 60).toString().padStart(2, "0")}
          </div>
        </div>

        <div className="hidden-buttons">
          <button
            onClick={startTimer}
            disabled={isRunning || timeRemaining === 0}
          >
            Start
          </button>
          <button onClick={pauseTimer} disabled={!isRunning || isPaused}>
            Pause
          </button>
          <button
            onClick={resumeTimer}
            disabled={!isPaused || timeRemaining === 0}
          >
            Resume
          </button>
          <button onClick={stopTimer} disabled={!isRunning && !isPaused}>
            Stop
          </button>
          <button
            onClick={resetTimer}
            disabled={isRunning || timeRemaining === eternalInitialTime}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
);

export default EternalTimer;
