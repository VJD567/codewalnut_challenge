import React, { useEffect, useRef, useState } from 'react';
import { Timer } from '../types/timer';
import { TimerAudio } from '../utils/audio';
import { useTimerStore } from '../store/useTimerStore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface WithTimerStateProps {
  timer: Timer;
  children: (props: {
    timer: Timer;
    isRunning: boolean;
    remainingTime: number;
    handleToggle: () => void;
    handleRestart: () => void;
    handleDelete: () => void;
  }) => React.ReactNode;
}

export const withTimerState: React.FC<WithTimerStateProps> = ({ timer, children }) => {
  const [isRunning, setIsRunning] = useState(timer.isRunning);
  const [remainingTime, setRemainingTime] = useState(timer.remainingTime);
  const intervalRef = useRef<number | null>(null);
  const timerAudio = TimerAudio.getInstance();
  const hasEndedRef = useRef(false);
  const { deleteTimer } = useTimerStore();

  useEffect(() => {

    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1 && !hasEndedRef.current) {
            hasEndedRef.current = true;
            
            const playSound = () => {
              timerAudio.play().catch(console.error);
            };
            const soundInterval = setInterval(playSound, 1000); 

            toast.success(
              <div className="flex justify-between items-center ">
                <span className="text-black text-center">Timer "{timer.title}" has ended!</span>
                <button
                  onClick={() => {
                    timerAudio.stop();
                    clearInterval(soundInterval); 
                    toast.dismiss();
                  }}
                  className="ml-4 w-fit text-white bg-black rounded-md px-2 py-1"
                >
                  Dismiss
                </button>
              </div>,
              {
                autoClose: false,
                closeButton: false,
              }
            );
            setIsRunning(false);
            clearInterval(intervalRef.current!);
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current!);
    }
   localStorage.setItem(`timer`, JSON.stringify({ isRunning, remainingTime, title: timer.title, duration: timer.duration, description: timer.description, id: timer.id }));

    return () => clearInterval(intervalRef.current!);
  }, [isRunning, timer.title, timerAudio]);

  const handleToggle = () => {
    if (remainingTime <= 0) {
      hasEndedRef.current = false;
    }
    setIsRunning(!isRunning);
  };

  const handleRestart = () => {
    hasEndedRef.current = false;
    setRemainingTime(timer.duration);
    setIsRunning(false);
  };

  const handleDelete = () => {
    timerAudio.stop();
    deleteTimer(timer.id);
  };

  return (
    <>
      {children({
        timer,
        isRunning,
        remainingTime,
        handleToggle,
        handleRestart,
        handleDelete,
      })}
      <ToastContainer position="top-right" />
    </>
  );
};
