import React from 'react';

interface ContainedButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  styles?: string;
  disabled?: boolean;
}

const ContainedButton: React.FC<ContainedButtonProps> = ({ text, onClick, children, styles, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg ${styles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
      {text}
    </button>
  );
};

export default ContainedButton;