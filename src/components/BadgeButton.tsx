import React from "react";

interface BadgeButtonProps {
  label: string;
  onClick?: () => void;
}

const BadgeButton = ({ label, onClick }: BadgeButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center px-1 py-1 bg-gray-50 text-white font-semibold rounded-lg shadow-md hover:bg-gray-200 transition justify-center"
    >
      <div>{label}</div>
    </button>
  );
};

export default BadgeButton;
