"use client";

import React, { useState } from "react";

const CheckboxComponent: React.FC = () => {
  const [checked, setChecked] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setChecked(checked === value ? null : value);
  };

  return (
    <div className="flex mt-2 gap-8">
      <label className="flex items-center cursor-pointer w-[175px]">
        <input
          type="checkbox"
          checked={checked === "option1"}
          onChange={() => handleChange("option1")}
          className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className="ml-2">Бэлнээр </span>
      </label>
      <label className="flex items-center cursor-pointer w-[175px]">
        <input
          type="checkbox"
          checked={checked === "option2"}
          onChange={() => handleChange("option2")}
          className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className="ml-2">Картаар </span>
      </label>
    </div>
  );
};

export default CheckboxComponent;
