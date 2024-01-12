import React from "react";
import "../index.css";
import { HomeIcon } from "lucide-react";
import HomeFeed from "./HomeFeed";
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
        <h1 className="flex justify-center items-center text-[72px] font-[font2] text-[#0d0c22] mt-10 mb-6 mx-auto leading-[76px] w-[768px]">
          The world's destination for design
        </h1>
        <div className="text-xl font-normal items-center">
          Get inspired by the work of millions of top-rated designers & agencies
          around the world.
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-[#0d0c22] text-white px-6 h-12 rounded-3xl hover:bg-slate-700 mt-8">
            Get started
          </button>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <div class="grid gap-[32px] overflow-hidden relative z-[2] mt-auto mb-auto mx-0 pt-[72px] pb-[72px] px-auto bg-transparent">
          <div className="animate-marquee">
            <div className="grid gap-[32px] grid-flow-col w-fit">
              <div className=" bg-profile-card opacity-100 w-[273px] h-[340px] rounded-3xl shadow-xl">
                <div className="grid grid-flow-row gap-2 text-[30px] leading-3 z-[2] absolute opacity-100 pt-4 pb-4 px-5 ">
                  <div className="flex w-[100%] text-[100%] align-baseline text-white font-medium bg-transparent">
                    name
                  </div>
                </div>
              </div>
              <div className="bg-profile-card opacity-100 w-[273px] h-[340px] rounded-3xl shadow-xl">
                <div className="grid grid-flow-row items-end gap-2 text-[30px] leading-3 z-[2] absolute opacity-100 pt-4 pb-4 px-5 ">
                  <div className="flex w-[100%] text-[100%] align-baseline text-white font-semibold bg-transparent">
                    name
                  </div>
                </div>
              </div>
              <div className="bg-profile-card opacity-100 w-[273px] h-[340px] rounded-3xl shadow-xl">
                <div className="grid grid-flow-row items-end gap-2 text-[30px] leading-3 z-[2] absolute opacity-100 pt-4 pb-4 px-5 ">
                  <div className="flex w-[100%] text-[100%] align-baseline font-semibold bg-transparent">
                    name
                  </div>
                </div>
              </div>
              <div className="bg-profile-card opacity-100 w-[273px] h-[340px] rounded-3xl shadow-xl">
                <div className="grid grid-flow-row items-end gap-2 text-[30px] leading-3 z-[2] absolute opacity-100 pt-4 pb-4 px-5 ">
                  <div className="flex w-[100%] text-[100%] align-baseline font-semibold bg-transparent">
                    name
                  </div>
                </div>
              </div>
              <div className="bg-profile-card opacity-100 w-[273px] h-[340px] rounded-3xl shadow-xl">
                <div className="grid grid-flow-row items-end gap-2 text-[30px] leading-3 z-[2] absolute opacity-100 pt-4 pb-4 px-5 ">
                  <div className="flex w-[100%] text-[100%] align-baseline font-semibold bg-transparent">
                    name
                  </div>
                </div>
              </div>
              <div className="bg-profile-card opacity-100 w-[273px] h-[340px] rounded-3xl shadow-xl">
                <div className="grid grid-flow-row items-end gap-2 text-[30px] leading-3 z-[2] absolute opacity-100 pt-4 pb-4 px-5 ">
                  <div className="flex w-[100%] text-[100%] align-baseline font-semibold bg-transparent">
                    name
                  </div>
                </div>
              </div>
              <div className="bg-profile-card opacity-100 w-[273px] h-[340px] rounded-3xl shadow-xl">
                <div className="grid grid-flow-row items-end gap-2 text-[30px] leading-3 z-[2] absolute opacity-100 pt-4 pb-4 px-5 ">
                  <div className="flex w-[100%] text-[100%] align-baseline font-semibold bg-transparent">
                    name
                  </div>
                </div>
              </div>
              <div className="bg-profile-card opacity-100 w-[273px] h-[340px] rounded-3xl shadow-xl">
                <div className="grid grid-flow-row items-end gap-2 text-[30px] leading-3 z-[2] absolute opacity-100 pt-4 pb-4 px-5 ">
                  <div className="flex w-[100%] text-[100%] align-baseline font-semibold bg-transparent">
                    name
                  </div>
                </div>
              </div>
              <div className="bg-profile-card opacity-100 w-[273px] h-[340px] rounded-3xl shadow-xl">
                <div className="grid grid-flow-row items-end gap-2 text-[30px] leading-3 z-[2] absolute opacity-100 pt-4 pb-4 px-5 ">
                  <div className="flex w-[100%] text-[100%] align-baseline font-semibold bg-transparent">
                    name
                  </div>
                </div>
              </div>
              <div className="bg-profile-card opacity-100 w-[273px] h-[340px] rounded-3xl shadow-xl">
                <div className="grid grid-flow-row items-end gap-2 text-[30px] leading-3 z-[2] absolute opacity-100 pt-4 pb-4 px-5 ">
                  <div className="flex w-[100%] text-[100%] align-baseline font-semibold bg-transparent">
                    name
                  </div>
                </div>
              </div>
              <div className="bg-profile-card opacity-100 w-[273px] h-[340px] rounded-3xl shadow-xl">
                <div className="grid grid-flow-row items-end gap-2 text-[30px] leading-3 z-[2] absolute opacity-100 pt-4 pb-4 px-5 ">
                  <div className="flex w-[100%] text-[100%] align-baseline font-semibold bg-transparent">
                    name
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Marquee cards */}
      <HomeFeed />
    </section>
  );
}

export default Main;
