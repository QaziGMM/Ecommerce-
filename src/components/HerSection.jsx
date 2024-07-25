import React from "react";
import { ChevronDown } from "lucide-react";

function HerSection() {
  return (
    <div>
      <div className=" mt-8 sm:mt-11 md:mt-16 lg:mt-24 ">
        <h1 className="text-4xl sm:text-5xl font-semibold flex justify-start">
          Get Inspired
        </h1>
        <p className="grid class justify-start grid-cols-1 md:grid-cols-2 weight pt-6 text-gray-800 mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At incidunt
          natus doloribus consequuntur, deserunt quidem cumque veniam! aliquid?
        </p>
      </div>
      <div className="grid grid-flow-col grid-cols-3 gap-5">
        <div className="grid grid-flow-col col-span-3 md:col-span-2 gap-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="grid class grid-flow-col justify-between  gap-3 border bg-white rounded-full p-3 fit-cont">
              <div>
                <p className="text-[8px] font-semibold text-gray-400">
                  Category
                </p>

                <p className="text-sm font-semibold">All Category</p>
              </div>
              <div>
                <p className="border rounded-full p-2 cursor-pointer hover:bg-slate-200">
                  <ChevronDown size={10} fontWeight={80} />
                </p>
              </div>
            </div>

            <div className="grid grid-flow-col class justify-between gap-3  border bg-white rounded-full p-3 fit-cont">
              <div>
                <p className="text-[8px] font-semibold text-gray-400">Color</p>

                <p className="text-sm font-semibold">All Color</p>
              </div>
              <div>
                <p className="border rounded-full p-2 cursor-pointer hover:bg-slate-200">
                  <ChevronDown size={10} fontWeight={80} />
                </p>
              </div>
            </div>

            <div className="grid grid-flow-col class justify-between  gap-3 border bg-white rounded-full p-3 fit-cont">
              <div>
                <p className="text-[8px] font-semibold text-gray-400">
                  Feature
                </p>

                <p className="text-sm font-semibold">All Feature</p>
              </div>
              <div>
                <p className="border rounded-full p-2 cursor-pointer hover:bg-slate-200">
                  <ChevronDown size={10} fontWeight={80} />
                </p>
              </div>
            </div>

            <div className="grid grid-flow-col class justify-between  gap-3 border bg-white rounded-full p-3 fit-cont">
              <div>
                <p className="text-[8px] font-semibold text-gray-400">Price</p>

                <p className="text-sm font-semibold"> From $0 to $100</p>
              </div>
              <div>
                <p className="border rounded-full p-2 cursor-pointer hover:bg-slate-200">
                  <ChevronDown size={10} fontWeight={80} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid col-span-1 justify-end pr-4">
          <div>
            <div className="grid grid-flow-col class justify-between col-span-1  gap-3 border bg-white rounded-full p-3 fit-cont">
              <div>
                <p className="text-[8px] font-semibold text-gray-400">Sort</p>

                <p className="text-sm font-semibold"> New In</p>
              </div>
              <div>
                <p className="border rounded-full p-2 cursor-pointer hover:bg-slate-200">
                  <ChevronDown size={10} fontWeight={80} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HerSection;
