import React from "react";
import YellowFooter from "./YellowFooter";

function HomeFeed() {
  return (
    <section className="">
      <h2 className="my-[43px] mx-[0] text-6xl">Explore inspiring designs</h2>
      <div className="grid gap-[32px] grid-cols-4 grid-rows-4 px-8">
        <div className="flex items-end opacity-100 w-80 h-64 rounded-3xl shadow-xl">
          <div className="grid grid-flow-row items-center gap-2 leading-3 z-[2] absolute opacity-100 pt-4 pb-4 px-5">
            <div className="flex align-baseline font-semibold bg-transparent ">
              name
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <button className="border-solid border-2 border-gray-950 px-6 h-12 rounded-3xl">
          Browse more inspiration
        </button>
      </div>
      <YellowFooter/>
    </section>
  );
}

export default HomeFeed;
