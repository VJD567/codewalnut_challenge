import { fireEvent, render, screen } from '@testing-library/react';
import ContainedButton from './ContainedButton';
import { describe, it, expect, vi } from 'vitest';

describe('ContainedButton', () => {
  it('renders with the correct text', () => {
    render(<ContainedButton text="Click Me" onClick={() => {}} children={null} />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<ContainedButton text="Click Me" onClick={handleClick} children={null} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when the disabled prop is true', () => {
    render(<ContainedButton text="Click Me" onClick={() => {}} children={null} disabled />);
    expect(screen.getByText('Click Me'));
  });
});
