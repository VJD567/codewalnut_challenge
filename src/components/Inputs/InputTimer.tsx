import React from 'react';

interface TimerInputProps {
  hours: number;
  setHours: (value: number) => void;
  minutes: number;
  setMinutes: (value: number) => void;
  seconds: number;
  setSeconds: (value: number) => void;
  touched: { title: boolean; hours: boolean; minutes: boolean; seconds: boolean };
  setTouched: (value: { title: boolean; hours: boolean; minutes: boolean; seconds: boolean }) => void;
  isTimeValid: boolean;
}

const InputTimer: React.FC<TimerInputProps> = ({
  hours,
  setHours,
  minutes,
  setMinutes,
  seconds,
  setSeconds,
  touched,
  setTouched,
  isTimeValid,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Duration <span className="text-red-500">*</span>
      </label>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Hours</label>
          <input
            type="number"
            min="0"
            max="23"
            value={hours}
            onChange={(e) => setHours(Math.min(23, parseInt(e.target.value) || 0))}
            onBlur={() => setTouched({ ...touched, hours: true })}
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Minutes</label>
          <input
            type="number"
            min="0"
            max="59"
            value={minutes}
            onChange={(e) => setMinutes(Math.min(59, parseInt(e.target.value) || 0))}
            onBlur={() => setTouched({ ...touched, minutes: true })}
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Seconds</label>
          <input
            type="number"
            min="0"
            max="59"
            value={seconds}
            onChange={(e) => setSeconds(Math.min(59, parseInt(e.target.value) || 0))}
            onBlur={() => setTouched({ ...touched, seconds: true })}
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      {touched.hours && touched.minutes && touched.seconds && !isTimeValid && (
        <p className="mt-2 text-sm text-red-500">
          Please set a duration greater than 0
        </p>
      )}
    </div>
  );
};

export default InputTimer;