import React from "react";

function Main() {
  return (
    <div className="w-full h-full" style={{ backgroundColor: "#f8f7f4" }}>
      <div className="flex justify-center mt-14">
        <button className="flex items-center bg-[#ffda79] rounded-3xl px-7 h-10 animate-pulse-reduce font-[customFont] text-[18px] font-medium">
          Over 3 million ready-to-work creatives!
        </button>
      </div>
      <h1 className="flex justify-center items-center text-[72px] font-[font2] mt-12">
        The world's destination for design
      </h1>
    </div>
  );
}

export default Main;
