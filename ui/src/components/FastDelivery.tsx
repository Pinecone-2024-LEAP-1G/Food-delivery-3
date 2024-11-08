import { Delivery } from "./Delivery";
import { PromptIcon } from "./icons/PromptIcon";
import { RecipeIcon } from "./icons/RecipeIcon";
import { StatusIcon } from "./icons/StatusIcon";
import MenuImage from "../components/MenuImage";

const status = [
  {
    icon: <StatusIcon />,
    title: "Хүргэлтийн төлөв хянах",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <PromptIcon />,
    title: "Шуурхай хүргэлт",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <RecipeIcon />,
    title: "Эрүүл, баталгаат орц",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <StatusIcon />,
    title: "Хоолны өргөн сонголт",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
];

export const FastDelivery = () => {
  return (
    <div className="flex gap-4 justify-between w-[1200px] py-[120px] ">
      {status.map((item, index) => {
        return (
          <Delivery
            key={index}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </div>
  );
};
