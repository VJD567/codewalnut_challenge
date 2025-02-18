import React from 'react';
import { Timer } from '../types/timer';
import { formatTime } from '../utils/time';
import { withTimerState } from './withTimerState';
import { TimerControls } from './TimerControls';
import { TimerProgress } from './TimerProgress';
import { EditTimerModal } from './EditTimerModal';
import { Trash2, RotateCcw, Pencil } from 'lucide-react';

interface TimerItemProps {
  timer: Timer;
  isRunning: boolean;
  remainingTime: number;
  handleToggle: () => void;
  handleRestart: () => void;
  handleDelete: () => void;
}

const TimerItemComponent: React.FC<TimerItemProps> = ({ timer, isRunning, remainingTime, handleToggle, handleRestart, handleDelete }) => {
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  
  return (
    <>
      <div className="relative bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-102 overflow-hidden md:w-[500px] min-w-[300px]">
        <div className="absolute inset-0 w-full h-full -z-10 opacity-5">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
            <path
              d="M50 20V50L70 70"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        
        <div className="relative">
          <div className="flex justify-between items-start mb-4">
            <div >
              <h3 className="text-xl font-semibold text-gray-800 break-words w-[50px] md:w-[300px] min-w-[150px]">{timer.title}</h3>
              <p className="text-gray-600 mt-1">{timer.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEditModalOpen(true)}
                className="p-2 rounded-full hover:bg-blue-50 text-blue-500 transition-colors"
                title="Edit Timer"
              >
                <Pencil className="w-5 h-5" />
              </button>
              <button
                onClick={handleRestart}
                className="p-2 rounded-full hover:bg-blue-50 text-blue-500 transition-colors"
                title="Restart Timer"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button
                onClick={handleDelete}
                className="p-2 rounded-full hover:bg-red-50 text-red-500 transition-colors"
                title="Delete Timer"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center mt-6">
            <div className="text-4xl font-mono font-bold text-gray-800 mb-4">
              {formatTime(remainingTime)}
            </div>
            
            <TimerProgress
              progress={(remainingTime / timer.duration) * 100}
            />
            
            <TimerControls
              isRunning={isRunning}
              remainingTime={remainingTime}
              duration={timer.duration}
              onToggle={handleToggle}
              onRestart={handleRestart}
            />
          </div>
        </div>
      </div>

      <EditTimerModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        timer={timer}
      />
    </>
  );
};

export const TimerItem: React.FC<{ timer: Timer }> = ({ timer }) => {
  return withTimerState({ timer, children: TimerItemComponent });
};