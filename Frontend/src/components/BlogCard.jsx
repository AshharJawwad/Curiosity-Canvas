import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { images } from "../constants";

const BlogCard = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <img
        src={images.Post1}
        alt=""
        className="object-cover object-center h-auto w-[350px] md:h-52 lg:h-48 xl:h-60"
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          Lost State of Boredom
        </h2>
        <p className="text-dark-smt mt-3 text-sm md:text-lg">
          We don't feel bored now a days. Does anyone knows why?
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={images.AuthorImg}
              alt=""
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                Ashhar Jawwad
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full">
                  <IoCheckmarkOutline className="w-1.5 h-1.5 text-[#36b37E]" />
                </span>
                <span className="italic text-dark-smt text-xs md:text-sm">
                  Verified Writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-smt italic text-sm md:text-base">31 Oct</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
