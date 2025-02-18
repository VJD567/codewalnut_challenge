import React, { useState } from 'react';
import { X, Clock } from 'lucide-react';
import { useTimerStore } from '../store/useTimerStore';
import { validateTimerForm } from '../utils/validation';
import { InputTitle } from './Inputs/InputTitle';
import InputDescription from './Inputs/InputDescription';
import InputTimer from './Inputs/InputTimer';
import ContainedButton from './Buttons/ContainedButton';

interface AddTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const  AddTimerModal: React.FC<AddTimerModalProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [touched, setTouched] = useState({
    title: false,
    hours: false,
    minutes: false,
    seconds: false,
  });
  
  const { addTimer } = useTimerStore();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateTimerForm({ title, description, hours, minutes, seconds })) {
      return;
    }

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    
    addTimer({
      title: title.trim(),
      description: description.trim(),
      duration: totalSeconds,
      remainingTime: totalSeconds,
      isRunning: false,
    });

    onClose();
    setTitle('');
    setDescription('');
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTouched({
      title: false,
      hours: false,
      minutes: false,
      seconds: false,
    });
  };

  const handleClose = () => {
    onClose();
    setTouched({
      title: false,
      hours: false,
      minutes: false,
      seconds: false,
    });
  };

  const isTimeValid = hours > 0 || minutes > 0 || seconds > 0;
  const isTitleValid = title.trim().length > 0 && title.length <= 50;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold">Add New Timer</h2>
          </div>
          <button 
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputTitle title={title} setTitle={setTitle} touched={touched} setTouched={setTouched} isTitleValid={isTitleValid} />
          <InputDescription description={description} setDescription={setDescription} />
          <InputTimer hours={hours} setHours={setHours} minutes={minutes} setMinutes={setMinutes} seconds={seconds} setSeconds={setSeconds} touched={touched} setTouched={setTouched} isTimeValid={isTimeValid} />
          
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <ContainedButton text="Add Timer" onClick={handleSubmit} disabled={!isTitleValid || !isTimeValid} children={undefined}>
            </ContainedButton>
          </div>
        </form>
      </div>
    </div>
  );
};