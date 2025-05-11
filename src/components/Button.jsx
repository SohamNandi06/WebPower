import React from 'react';

const Button = ({ title, id, rightIcon, leftIcon, containerClass = '' }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black flex items-center ${containerClass}`}
    >
      {/* Left Icon */}
      {leftIcon && <span className="mr-2">{leftIcon}</span>}

      {/* Title */}
      <span className="font-general text-xs uppercase">
        {title}
      </span>

      {/* Right Icon */}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
