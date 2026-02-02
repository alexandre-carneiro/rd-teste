import React from 'react';

function SubmitButton({ text, disabled = false }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`
        w-full
        bg-gradient-to-r from-blue-600 to-blue-700
        hover:from-blue-700 hover:to-blue-800
        disabled:from-gray-400 disabled:to-gray-500
        disabled:cursor-not-allowed
        text-white font-bold py-3 px-6 rounded-lg
        shadow-lg hover:shadow-xl
        transform hover:scale-105 active:scale-100
        transition-all duration-200
        flex items-center justify-center
        space-x-2
      `}
    >
      <span>{text}</span>
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </button>
  );
}

export default SubmitButton;
