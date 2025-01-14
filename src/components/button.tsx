import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="Shadow-customShadow bg-[linear-gradient(163.96deg,rgba(255,231,231,0.46)_0%,rgba(255,255,255,0.47)_7.3%,rgba(0,0,0,0)_23.96%,rgba(255,255,255,0.3)_57.81%,rgba(115,129,255,0.45)_81.28%,rgba(0,7,73,0.31)_100%),linear-gradient(0deg,rgba(188,196,215,0.2),rgba(188,196,215,0.2))] rounded-xl relative px-[1px] py-[1px] backdrop-blur-[50px]">
      <div className="bg-[#09132F] px-[22px] text-center h-10 py-[7px] rounded-xl ">
        <span className="tex-white text-sm font-bold text-center py-auto">
          {text}
        </span>
      </div>
    </button>
  );
};

export default Button;
