import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-customGradient rounded-xl relative px-[1px] py-[1px] backdrop-blur-[50px]">
      <div className="bg-[#09132F] px-[22px] py-[10px] rounded-xl ">
        <span className="text-white text-sm font-bold ">{text}</span>
      </div>
    </button>
  );
};

export default Button;
