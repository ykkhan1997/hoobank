import { logo } from "@/assets";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="flex justify-center items-center sm:py-16 py-6 flex-col">
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <Image
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className="font-poppins font-normal text-[18px] leading-[30.8px] mt-5 max-w-[312px] text-dimWhite">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-[1.5] justify-between flex-wrap items-center md:mt-0 mt-10 ">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                     key={link.name}className={`font-poppins font-medium text-[16px] leading-[27.8px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`w-full pt-6 flex justify-between items-center md:flex-row flex-col border-t-[1px] border-t-[#3F3E45]`}
      >
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[27px]">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <Image
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
