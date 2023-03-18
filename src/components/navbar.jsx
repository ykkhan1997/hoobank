import { navLinks } from "@/constants";
import Image from "next/image";
import { close, logo, menu } from "@/assets";
import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState();
  const [toogle, setToogle] = useState(false);
  return (
    <navbar className="flex justify-between items-center w-full py-6">
      <Image src={logo} className={`w-[124px] h-[32px]`} alt="logo" />
      <ul className="list-none sm:flex hidden  justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal text-[16px] cursor-pointer ${
              active === nav.title ? "text-white" : "text-[#bdbcbb]"
            }
                    ${index == navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center mr-4">
        <Image
          src={toogle ? close : menu}
          alt="menu"
          className={`w-[28px] h-[28px] object-contain`}
          onClick={() => setToogle(!toogle)}
        />
        <div
          className={`${
            !toogle ? "hidden" : "flex"
          } p-6 absolute bg-discount_gradient top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex-col  justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium text-[16px] cursor-pointer ${
                  active === nav.title ? "text-white" : "text-[#bdbcbb]"
                }
                    ${index == navLinks.length - 1 ? "mb-0" : "mb-6"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
