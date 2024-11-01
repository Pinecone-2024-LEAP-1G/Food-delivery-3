"use client";

import { OrderSelectOptions } from "./OrderDetail";

type OrderDetailCheckBoxProps = Pick<OrderSelectOptions, "paymentType"> & {
  onChange: (_type: string, _value: string) => void;
};

export const CheckboxComponent = (props: OrderDetailCheckBoxProps) => {
  const { paymentType, onChange } = props;

  return (
    <div className="flex mt-2 gap-8">
      <label className="flex items-center cursor-pointer w-[175px]">
        <input
          type="checkbox"
          checked={paymentType === "CASH"}
          onChange={() => onChange("paymentType", "CASH")}
          className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className="ml-2">Бэлнээр </span>
      </label>
      <label className="flex items-center cursor-pointer w-[175px]">
        <input
          type="checkbox"
          checked={paymentType === "CART"}
          onChange={() => onChange("paymentType", "CART")}
          className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className="ml-2">Картаар </span>
      </label>
    </div>
  );
};
