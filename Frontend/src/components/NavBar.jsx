import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

import { images } from "../constants";

const navItemInfo = [
  { name: "Home", type: "link" },
  { name: "Blogs", type: "link" },
  { name: "Pricing", type: "link" },
  { name: "Faq", type: "link" },
];

const NavItem = ({ item }) => {
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className="cursor-pointer text-purple-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <></>
      )}
    </li>
  );
};

const NavBar = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-secondary">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img className="w-32 lg:w-auto" src={images.Logo} alt="logo" />
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <IoClose className="w-6 h-6" onClick={navVisibilityHandler} />
          ) : (
            <IoMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center font-semibold`}
        >
          <ul className="text-white lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 items-center gap-y-5">
            {navItemInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button className="mt-5 lg:mt-0 border-2 border-purple-500 px-6 py-2 rounded-full text-purple-500 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default NavBar;
