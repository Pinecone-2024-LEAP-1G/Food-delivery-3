import React from "react";

interface DownArrowProps {
  className?: string;
}

const DownArrow: React.FC<DownArrowProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="13"
      viewBox="0 0 20 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 2.025L1.775 0.25L10 8.475L18.225 0.25L20 2.025L10 12.025L0 2.025Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DownArrow;
