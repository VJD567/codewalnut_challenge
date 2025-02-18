import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { TimerItem } from './TimerItem';
import { Timer } from '../types/timer';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { store } from '../store/useTimerStore';

const mockTimer: Timer = {
  id: '1',
  title: 'Test Timer',
  description: 'Test Description',
  duration: 3600,
  remainingTime: 1800,
  isRunning: false,
  createdAt: Date.now(),
};

const renderWithProvider = (component: React.ReactNode) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe('TimerItem', () => {
  it('renders the timer title and description', () => {
    renderWithProvider(<TimerItem timer={mockTimer} />);
    expect(screen.getByText('Test Timer')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('toggles the edit modal when edit button is clicked', () => {
    renderWithProvider(<TimerItem timer={mockTimer} />);
    const editButton = screen.getByTitle('Edit Timer');
    fireEvent.click(editButton);
    expect(screen.getByText('Edit Timer')).toBeInTheDocument();
  });
});
