import React from "react";

const items = [
  {
    title: "Volume",
    value: "15 ml",
  },
  {
    title: "Concentration",
    value: "15 M/mL",
  },
  {
    value: "4%",
    title: "Normal Morphology",
  },
  {
    value: "40%",
    title: "Progressive Motility",
  },
];

const CardItems = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="grid grid-cols-2 gap-2 w-full">
        {items.map((item) => (
          <div
            className="flex flex-col gap-1 p-4 rounded-md bg-[#FFFFFF0D]"
            key={item.value}
          >
            <h1 className="text-base font-semibold text-white">{item.value}</h1>
            <h1 className="text-xs font-medium text-[#929DB7]">{item.title}</h1>
          </div>
        ))}
      </div>
      <div className="flex  gap-2 p-3 rounded-md bg-[#FFFFFF0D] w-full">
        <img src="/file-02.png" alt="" />
        <h1 className="text-xs font-medium text-white">
          Minimal bleeding noted at puncture site, reso.....
        </h1>
      </div>
    </div>
  );
};

export default CardItems;
