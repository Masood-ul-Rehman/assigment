import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <div className="relative inline-block w-full h-[39px]">
      <div className="absolute inset-0 rounded-[12px] bg-gradient-to-r from-[#FFE7E7] via-[#FFFFFF] via-[#000000] via-[#FFFFFF] via-[#7381FF] via-[#000749] to-[#BCC4D7] p-[1px]">
        <button className="relative w-full h-full px-[18px] py-[10px] rounded-[12px] bg-[#09132F] flex items-center justify-center text-white shadow-[0_46px_46px_rgba(0,0,0,0.02)]">
          {text}
        </button>
      </div>
    </div>
  );
};

export default Button;
