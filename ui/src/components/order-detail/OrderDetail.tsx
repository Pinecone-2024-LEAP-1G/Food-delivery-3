'use client';

import { useState } from 'react';
import OrderVerify from './OrderVerify';
import { OrderDetailAddressInfo } from './OrderDetailAddressInfo';
import axios from 'axios';

export type OrderSelectOptions = {
  userId: string;
  district: string;
  khoroo: string;
  apartment: string;
  description: string;
  phoneNumber: string;
  paymentType: 'CART' | 'CASH' | null;
};

export const OrderDetail = () => {
  const [selectedOptions, setSelectedOptions] = useState<OrderSelectOptions>({
    userId: '',
    district: '',
    khoroo: '',
    apartment: '',
    description: '',
    phoneNumber: '',
    paymentType: null,
  });

  const userid = localStorage.getItem('userid');

  const createOrder = async () => {
    try {
      const { data } = await axios.post('http://localhost:8000/orders', {
        userId: userid,
        district: selectedOptions.district,
        khoroo: selectedOptions.khoroo,
        apartment: selectedOptions.apartment,
        phoneNumber: selectedOptions.phoneNumber,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(selectedOptions);

  const handleSelectColor = (type: string, value: string) => {
    setSelectedOptions((prev) => {
      return { ...prev, [type]: value };
    });
  };

  return (
    <div className="flex justify-center gap-48 mt-12 mx-auto">
      <OrderDetailAddressInfo
        userId={selectedOptions.userId}
        district={selectedOptions.district}
        khoroo={selectedOptions.khoroo}
        apartment={selectedOptions.apartment}
        description={selectedOptions.description}
        phoneNumber={selectedOptions.phoneNumber}
        paymentType={selectedOptions.paymentType}
        onChange={handleSelectColor}
      />
      <div>
        <OrderVerify />
      </div>
      <button onClick={createOrder}>submit order</button>
    </div>
  );
};
