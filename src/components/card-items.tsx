import React from "react";

const items = [
  {
    title: "Volume",
    value: "15 ml",
  },
  {
    title: "15 M/mL",
    value: "Concentration",
  },
  {
    title: "4%",
    value: "Normal Morphology",
  },
  {
    title: "40%",
    value: "Progressive Motility",
  },
];

const CardItems = () => {
  return (
    <div className="flex items-center gap-2">
      {items.map((item) => (
        <div
          className="flex flex-col gap-1 p-4 rounded-md bg-[#FFFFFF0D]"
          key={item.value}
        >
          <h1 className="text-md font-medium text-white">{item.value}</h1>
          <h1 className="text-xs font-medium text-[#929DB7]">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default CardItems;
