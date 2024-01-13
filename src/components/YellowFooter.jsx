import React from "react";
import Footer from "./Footer";

function YellowFooter() {
  return (
    <>
      <section className="py-32 bg-[#ffda79] text-center block mt-[140px]">
        <div className="grid gap-6 px-8 max-w-screen-sm mx-auto">
          <h1 className="flex justify-center items-center text-[72px] font-[font2] text-[#0d0c22] leading-[72px]">
            Find your next designer today
          </h1>
          <div className=" max-w-[600px] text-xl leading-9 ">
            The world's leading brands use Dribbble to hire creative talent.
            Browse millions of top-rated portfolios to find your perfect
            creative match.
          </div>
          <div className="flex justify-center gap-4 items-center">
            <button className="bg-[#0d0c22] text-white font-semibold px-6 h-12 rounded-3xl hover:bg-slate-700 mt-8">
              Get started now
            </button>
            <button className="bg-white text-[#0d0c22] font-semibold px-6 h-12 rounded-3xl hover:bg-slate-700 mt-8">
              Learn about hiring
            </button>
          </div>
          <div className="max-w-[600px] text-xl mx-auto leading-9 ">
            Are you a designer? <a className=" underline">Join Dribbble</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default YellowFooter;
