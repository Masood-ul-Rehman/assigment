import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <div className=" flex justify-center bg-primary items-center shadow-customShadow">
      <button className="bg-customGradient rounded-xl relative px-[1px] py-[1px] backdrop-blur-[50px]">
        <div className="bg-[#09132F] px-[18px] py-[11px] rounded-xl ">
          <span className="text-white text-sm font-bold">{text}</span>
        </div>
      </button>
    </div>
  );
};

export default Button;
