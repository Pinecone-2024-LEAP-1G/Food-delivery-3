type DeliveryType = {
  icon: JSX.Element;
  title: string;
  text: string;
};

export const Delivery = ({ icon, title, text }: DeliveryType) => {
  return (
    <div className="w-[264px] h-[156px] rounded-2xl border border-gray-200 p-4 shadow-custom">
      <div className="flex flex-col gap-4">
        <div className="flex p-4">{icon}</div>
        <div className="flex flex-col">
          <p className="text-lg font-bold leading-7">{title}</p>
          <p className="text-sm font-normal leading-4">{text}</p>
        </div>
      </div>
    </div>
  );
};
