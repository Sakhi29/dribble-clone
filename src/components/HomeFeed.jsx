import React from "react";
import YellowFooter from "./YellowFooter";

function HomeFeed() {
  return (
    <section className="">
      <h2 className="my-[43px] mx-[0] text-5xl">Explore inspiring designs</h2>
      <div className="grid grid-cols-4 px-[72px] gap-9">
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-xl w-fit hover: bg-white">
            <img
              className="cursor-pointer text-black "
              src="../src/assets/thumbail1.jpg"
            />
          </div>
        </div>
        <div className="py-10">
          <div className="rounded overflow-hidden shadow-xl w-fit">
            <img
              className="cursor-pointer text-black"
              src="../src/assets/thumbail1.jpg"
            />
          </div>
        </div>
        <div className="py-10 ">
          <div className="rounded overflow-hidden shadow-xl w-fit">
            <img
              className="cursor-pointer text-black"
              src="../src/assets/thumbail1.jpg"
            />
          </div>
        </div>
        <div className="py-10 ">
          <div className="rounded overflow-hidden shadow-xl w-fit">
            <img
              className="cursor-pointer text-black"
              src="../src/assets/thumbail1.jpg"
            />
          </div>
        </div>
        <div className="py-10 ">
          <div className="rounded overflow-hidden shadow-xl w-fit">
            <img
              className="cursor-pointer text-black"
              src="../src/assets/thumbail1.jpg"
            />
          </div>
        </div>
        <div className="py-10 ">
          <div className="rounded overflow-hidden shadow-xl w-fit">
            <img
              className="cursor-pointer text-black"
              src="../src/assets/thumbail1.jpg"
            />
          </div>
        </div>
        <div className="py-10 ">
          <div className="rounded overflow-hidden shadow-xl w-fit">
            <img
              className="cursor-pointer text-black"
              src="../src/assets/thumbail1.jpg"
            />
          </div>
        </div>
        <div className="py-10 ">
          <div className="rounded overflow-hidden shadow-xl w-fit">
            <img
              className="cursor-pointer text-black"
              src="../src/assets/thumbail1.jpg"
            />
          </div>
        </div>
      </div>
      <div className="">
        <button className="border-solid border-2 border-gray-950 px-6 h-12 rounded-3xl">
          Browse more inspiration
        </button>
      </div>
      <YellowFooter />
    </section>
  );
}

export default HomeFeed;
