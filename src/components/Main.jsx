import React from "react";

function Main() {
  return (
    <section
      className="pt-20 text-center w-full h-44"
      style={{ backgroundColor: "#f8f7f4" }}
    >
      {/* section for first page */}
      <div className="flex px-8 box-content flex-col items-center m-auto overflow-hidden">
        {/*home container */}
        <div className="flex items-center">
          <button className=" bg-[#ffda79] rounded-3xl px-7 h-10 animate-pulse-reduce font-[customFont] text-[18px] font-medium">
            Over 3 million ready-to-work creatives!
          </button>
        </div>
        <h1 className="flex justify-center items-center text-[72px] font-[font2] mt-10 mb-6 mx-auto leading-[76px] w-[768px]">
          The world's destination for design
        </h1>
        <div className="text-xl font-normal items-center">
          Get inspired by the work of millions of top-rated designers & agencies
          around the world.
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-black text-white px-6 h-12 rounded-3xl hover:bg-slate-700 mt-8">
            Get started
          </button>
        </div>
      </div>
      <div class="overflow-x-hidden">
        <div class="py-12 animate-marquee whitespace-nowrap columns-24 ">
          <span class="mx-4 text-4xl">Marquee Item 1</span>
          <span class="mx-4 text-4xl">Marquee Item 2</span>
          <span class="mx-4 text-4xl">Marquee Item 3</span>
          <span class="mx-4 text-4xl">Marquee Item 4</span>
          <span class="mx-4 text-4xl">Marquee Item 5</span>
        </div>
      </div>
      {/* Marquee cards */}
    </section>
  );
}

export default Main;
