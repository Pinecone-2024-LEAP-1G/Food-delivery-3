import { Delivery } from "./Delivery";
import { PromptIcon } from "./PromptIcon";
import { RecipeIcon } from "./RecipeIcon";
import { StatusIcon } from "./StatusIcon";

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
    <div className="flex gap-4">
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
