'use client';

import { SetStateAction, useState } from 'react';
import OrderVerify from '../order-detail/OrderVerify';
import { OrderDetailAddressInfo } from './OrderDetailAddressInfo';

export type OrderSelectOptions = {
  district: string;
  street: string;
  home: string;
  description: string;
  phoneNumber: string;
  paymentType: 'CART' | 'CASH' | null;
};

export const OrderDetail = () => {
  const [selectedOptions, setSelectedOptions] = useState<OrderSelectOptions>({
    district: '',
    street: '',
    home: '',
    description: '',
    phoneNumber: '',
    paymentType: null,
  });

  const handleSelectColor = (type: string, value: string) => {
    setSelectedOptions((prev) => {
      return { ...prev, [type]: value };
    });
  };

  console.log({ selectedOptions });

  return (
    <div className="flex justify-center gap-[180px] mt-12">
      <OrderDetailAddressInfo
        district={selectedOptions.district}
        street={selectedOptions.street}
        home={selectedOptions.home}
        description={selectedOptions.description}
        phoneNumber={selectedOptions.phoneNumber}
        paymentType={selectedOptions.paymentType}
        onChange={handleSelectColor}
      />
      <div>
        <OrderVerify />
      </div>
    </div>
  );
};
