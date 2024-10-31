import React from "react";
import { IoSearch } from "react-icons/io5";

import { images } from "../../../constants";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row h-[655px]">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Exploring Ideas, Illuminating Insights – A Canvas for the Curious Mind
        </h1>
        <p className="text-dark-smt mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          <span className="font-semibold">Welcome to Curiosity Canvas</span> – a space where curiosity sparks discovery
          and insights take shape. From life’s big questions to everyday
          wonders, join me in exploring ideas that inspire, enlighten, and bring
          clarity. Let’s navigate the world of knowledge together, one canvas at
          a time.
        </p>
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
          <div className="relative">
            <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
              type="text"
              placeholder="Search Blog"
            />
          </div>
          <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">Search</button>
        </div>
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-smt font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">Popular Tags:</span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font">Travel</li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font">Technology</li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font">Lifestyle</li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:ml-10">
        <img className="w-[650px] h-[650px]" src={images.Hero} alt="Readers" />
      </div>
    </section>
  );
};

export default Hero;
